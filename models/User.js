const { Model, DataTypes} = require('sequelize');
const sequelize = require('./../config/connection');

class User extends Model {};

User.init({
    email: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    },
    firstName: {
        type: DataTypes.STRING,
    }
})