require('dotenv').config();
const { Sequelize } = require('sequelize');

const connectionStringURI = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`

const sequelize = new Sequelize(connectionStringURI);

module.exports = sequelize;