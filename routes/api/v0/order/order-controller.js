import to from "await-to-js";
import { unlinkSync, createReadStream } from "fs";
import csv from "csv-parser";
import { getAllOrders, saveOrderByCSV } from "./order-service";

export const addOrderController = async (req, res) => {
  if (req.file) {
    //check file is available
    const { filename, path, mimetype } = req.file;
    const extratedData = []; //predefine the array to put extracted data
    switch (
      mimetype //switch case for finding the type of file
    ) {
      case "text/csv":
        //reading the csv file
        createReadStream(path)
          .pipe(csv())
          .on("data", (data) => {
            extratedData.push(data);
          })
          .on("end", async () => {
            unlinkSync(path); //delete the file after extracting the data
            const [err, orders] = await to(saveOrderByCSV(extratedData));
            if (!err) {
              return res.json(orders);
            }
            res.status(400).json({
              status: 2,
              error: err.message,
            });
          });
        break;
      default:
        unlinkSync(path); //delete the file if not relevent
        res.status(400).json({
          status: 2,
          error:
            "Uploaded file is not in required file format, Please upload .csv file only",
        });
    }
  } else {
    return res.status(404).json({
      status: 2,
      error: "No file is uploaded",
    });
  }
};

export const getAllOrdersController = async (req, res) => {
  const [err, orders] = await to(getAllOrders());

  if (!err) {
    return res.json(orders);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};
