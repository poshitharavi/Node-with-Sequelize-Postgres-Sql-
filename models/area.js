import { Sequelize } from 'sequelize'
import db from '../config/database'

const Area = db.define('area', {
    areaId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    areaName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postalCode: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isNumeric: {
                args: true,
                msg: 'Please enter a number code as postal code'
            },
            len: {
                args: [7, 7],
                msg: 'maximum length is 7 for postal code'
            }
        }
    },
    createdBy: {
        type: Sequelize.STRING,
        allowNull: false
    },
    updatedBy: {
        type: Sequelize.STRING,
        allowNull: true
    }
}, {
    timestamps: true,
    freezeTableName: true
})

module.exports = Area