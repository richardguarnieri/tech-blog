const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const { urlencoded } = require('express');

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.use(routes);

const init = async () => {
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(port, () => {
            console.log(`Tech Blog app listening on port ${port}`)
        });
    } catch (err) {
        console.log('Unable to connect to the database:', err);
    }
} 

init();