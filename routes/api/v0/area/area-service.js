import Area from '../../../../models/area'
import { Sequelize } from 'sequelize'


export const getAllAreas = async() => {
    return await Area.findAll()
}

export const getAreaById = async(id) => {
    return await Area.findAll({ where: { areaid: id } })
}

export const saveArea = async(data) => {

    return await Area.create({
        areaname: data.areaname,
        postalcode: data.postalcode,
        createdby: data.user,
        updatedby: data.user
    })
}

export const updateArea = async(id, data) => {

    const updateStatus = await Area.update({
        areaname: data.areaname,
        postalcode: data.postalcode,
        updatedby: data.user
    }, {
        where: {
            areaid: id
        }
    })

    if (updateStatus[0] === 1) return await Area.findAll({ where: { areaid: id } })

    throw new Error('area id is not found')
}

export const deleteArea = async(id) => {

    const deletingArea = await Area.findAll({ where: { areaid: id } })
    if (deletingArea[0]) {
        await Area.destroy({
            where: { areaid: id }
        })

        return deletingArea
    }
    throw new Error('area id is not found')
}