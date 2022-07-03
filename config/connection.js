require('dotenv').config();
const { Sequelize } = require('sequelize');

const connectionURI = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`

const sequelize = new Sequelize(connectionURI);

module.exports = sequelize;