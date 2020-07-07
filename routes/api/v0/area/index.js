import express from "express";
import {
  getAllAreasController,
  saveAreaController,
  updateAreaController,
  getAreaByIdController,
  deleteAreaController,
} from "./area-controller";

const area = express.Router();

area.get("/", getAllAreasController);
area.get("/:id", getAreaByIdController);
area.post("/save", saveAreaController);
area.put("/update/:id", updateAreaController);
area.delete("/delete/:id", deleteAreaController);

export default area;
