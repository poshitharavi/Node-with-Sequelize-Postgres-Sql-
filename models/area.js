import { Sequelize } from 'sequelize'
import db from '../config/database'

const Area = db.define('area', {
    areaid: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    areaname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    postalcode: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    createdby: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdat: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    updatedby: {
        type: Sequelize.STRING,
        allowNull: true
    },
    updatedat: {
        type: Sequelize.DATE,
        allowNull: true,
        defaultValue: Sequelize.NOW
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = Area