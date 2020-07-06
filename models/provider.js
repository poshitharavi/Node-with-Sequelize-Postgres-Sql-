import { Sequelize } from 'sequelize'
import db from '../config/database'

const Provider = db.define('provider', {
    providerID: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    providerName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    shortName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressLine1: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressLine2: {
        type: Sequelize.STRING,
        allowNull: false
    },
    addressLine3: {
        type: Sequelize.STRING,
        allowNull: false
    },
    PhoneNo1: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            isNumeric: {
                args: true,
                msg: 'Please enter a number code as Telephone Number'
            },
            len: {
                args: [10, 10],
                msg: 'maximum length is 10 for Telephone Number'
            }
        }
    },
    PhoneNo2: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            isNumeric: {
                args: true,
                msg: 'Please enter a number code as Telephone Number'
            },
            len: {
                args: [10, 10],
                msg: 'maximum length is 10 for Telephone Number'
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

module.exports = Provider