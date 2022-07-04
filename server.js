const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const port = process.env.PORT || 3001;

app.use(routes);

const User = require('./models/User')

const init = async () => {
    try {
        await sequelize.sync({ force: true, match: /_test$/ });
        console.log('Connection has been established successfully.');
        app.listen(port, () => {
            console.log(`Tech Blog app listening on port ${port}`)
        });
    } catch (err) {
        console.log('Unable to connect to the database:', err.message);
    }
} 

init();