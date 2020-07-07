import express from "express";
import { addOrderController } from "./order-controller";
import multer from "multer";
import { func } from "joi";
import path from "path";
const order = express.Router();

//file upload midleware
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "temp"); //upload to temp folder
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); //edit the file name
  },
});

// Define the maximum size for uploading
// picture i.e. 1 MB. it is optional
const maxSize = 10 * 1000 * 1000;

let upload = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("order_file");

order.post("/add-orders", upload, addOrderController);

export default order;
