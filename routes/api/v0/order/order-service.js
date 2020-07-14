import Order from "../../../../models/order";
import { getAreaByPostalCode, saveArea } from "../area/area-service";
import to from "await-to-js";

export const getAllOrders = async () => {
  return await Order.findAll();
};

export const saveOrderByCSV = async (csvData) => {
  const errors = [];
  const savedOrders = [];
  for (const data of csvData) {
    let area = await getAreaByPostalCode(data["POSTAL CODE"]);
    if (area.length === 0) {
      const newArea = {
        areaName: data["RECEIVER CITY"],
        postalCode: data["POSTAL CODE"],
        user: "developer",
      };
      const [err, savedArea] = await to(saveArea(newArea));

      if (err) {
        const error = {
          errorMsg: err.message,
          data: data,
        };
        console.log(err.message);
        errors.push(error);
        continue;
      }
      area = savedArea;
    } else {
      area = area[0]; //find all comes with an array need to extract that
    }
    const [err, savedOrder] = await to(
      Order.create({
        sellerId: 1, //asumed seller is 1 untill the seller modle is created
        branchId: 1, //asumed seller is 1 untill the branch modle is created
        bookingId: 1,
        trackingId: data["BARCODE"],
        sellerReferenceId: data["DARAZ REFERENCE"],
        reciverName: data["RECEIVER NAME"],
        recevierContactNo: data["RECEIVER CONTACT"],
        deliveryAddress: data["RECEIVER ADDRESS"],
        deliveryDate: Date.now(),
        packageWeight: data["WEIGHT(Kg)"],
        pakageAmount: data["COD AMOUNT"],
        packageDescription: data["DESCRIPTION"],
        paymentMethod: data["PAYMENT TYPE"],
        orderValue: data["COD AMOUNT"],
        orderCommission: 0.3,
        deliveryCharge: data["DELIVERY CHARGE"],
        deliveryCommission: 0.3,
        totalAmount: data["COD AMOUNT"],
        orderStatus: 1,
        orderStatusForSeller: 1,
        isSync: false,
        deliveryAreaId: area.areaId,
        createdBy: "developer",
        updatedBy: "developer",
      })
    );

    if (err) {
      const error = {
        errorMsg: err.message,
        data: data,
      };
      errors.push(error);
      continue;
    }
    savedOrders.push(savedOrder);
  }

  return {
    success: savedOrders,
    errors: errors,
  };
};
