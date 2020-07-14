import { Sequelize } from "sequelize";
import db from "../config/database";
import Area from "./area";

const Order = db.define(
  "order",
  {
    orderId: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    sellerId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    branchId: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    bookingId: {
      type: Sequelize.INTEGER,
    },
    trackingId: {
      type: Sequelize.STRING,
      unique: {
        args: true,
        msg: "Tracking id is already exisiting",
      },
    },
    sellerReferenceId: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "Seller reference is already exisiting",
      },
    },
    reciverName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    recevierContactNo: {
      type: Sequelize.STRING,
      allowNull: false,
      alidate: {
        isNumeric: {
          args: true,
          msg: "Entered contact no is invalid",
        },
        len: {
          args: [9, 9],
          msg: "maximum length is 9 for contact no",
        },
      },
    },
    deliveryAddress: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deliveryDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    packageWeight: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    pakageAmount: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    packageDescription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    paymentMethod: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    orderValue: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    orderCommission: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    deliveryCharge: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    deliveryCommission: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    totalAmount: {
      type: Sequelize.DECIMAL,
      allowNull: false,
    },
    prepaidAmount: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    requiredAmount: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    recipetAmount: {
      type: Sequelize.DECIMAL,
      allowNull: true,
    },
    remarks: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    deliveryNo: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    orderStatus: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    orderStatusForSeller: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    isSync: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
    },
    createdBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    updatedBy: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    freezeTableName: true,
  }
);

Order.belongsTo(Area, { foreignKey: "deliveryAreaId" });

module.exports = Order;
