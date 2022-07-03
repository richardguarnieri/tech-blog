require('dotenv').config();
const { Sequelize } = require('sequelize');

const connectionURI = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`

const sequelize = new Sequelize(connectionURI);

const init = async () => {
    try {
        await sequelize.sync()  
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.log('Unable to connect to the database:', err);
    }
} 

init()

module.exports = sequelize;