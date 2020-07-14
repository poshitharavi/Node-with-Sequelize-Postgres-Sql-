import to from "await-to-js";
import {
  getAllAreas,
  saveArea,
  updateArea,
  getAreaById,
  deleteArea,
} from "./area-service";

export const getAllAreasController = async (req, res) => {
  const [err, areas] = await to(getAllAreas());

  if (!err) {
    return res.json(areas);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const getAreaByIdController = async (req, res) => {
  const { id } = req.params;
  const [err, area] = await to(getAreaById(id));

  if (!err) res.json(area);

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const saveAreaController = async (req, res) => {
  const { body } = req;

  const [err, area] = await to(saveArea(body));

  if (!err) {
    return res.json(area);
  }
  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const updateAreaController = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  const [err, updatedArea] = await to(updateArea(id, body));

  if (!err) {
    return res.json(updatedArea[0]);
  }

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};

export const deleteAreaController = async (req, res) => {
  const { id } = req.params;

  const [err, deletedArea] = await to(deleteArea(id));

  if (!err) return res.json(deletedArea[0]);

  return res.status(400).json({
    status: 2,
    error: err.message,
  });
};
