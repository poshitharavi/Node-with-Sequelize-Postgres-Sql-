import Area from "../../../../models/area";
import { Sequelize } from "sequelize";

export const getAllAreas = async () => {
  return await Area.findAll();
};

export const getAreaById = async (id) => {
  return await Area.findAll({ where: { areaId: id } });
};

export const getAreaByPostalCode = async (postalCode) => {
  return await Area.findAll({ where: { postalCode: postalCode } });
};

export const saveArea = async (data) => {
  return await Area.create({
    areaName: data.areaName,
    postalCode: data.postalCode,
    createdBy: data.user,
    updatedBy: data.user,
  });
};

export const updateArea = async (id, data) => {
  const updateStatus = await Area.update(
    {
      areaName: data.areaName,
      postalCode: data.postalCode,
      updatedBy: data.user,
    },
    {
      where: {
        areaId: id,
      },
    }
  );

  if (updateStatus[0] === 1)
    return await Area.findAll({ where: { areaId: id } });

  throw new Error("area id is not found");
};

export const deleteArea = async (id) => {
  const deletingArea = await Area.findAll({ where: { areaId: id } });
  if (deletingArea[0]) {
    await Area.destroy({
      where: { areaId: id },
    });

    return deletingArea;
  }
  throw new Error("area id is not found");
};
