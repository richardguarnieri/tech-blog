require('dotenv').config();
const { Sequelize } = require('sequelize');

const herokuClearDbURL = 'mysql://ba460f1b1335b6:3b0ff9bd@us-cdbr-east-06.cleardb.net/heroku_6f39f4450240f29?';

const connectionStringURI = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`

const sequelize = new Sequelize(herokuClearDbURL);

module.exports = sequelize;