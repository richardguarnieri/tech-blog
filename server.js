const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./controllers');
const { engine } = require('express-handlebars');

const app = express();
const port = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('public'));
app.use(routes);

const init = async () => {
    try {
        await sequelize.sync();
        console.log('Connection has been established successfully.');
        app.listen(port, () => {
            console.log(`Tech Blog app listening on port ${port}`)
        });
    } catch (err) {
        console.log('Unable to connect to the database:', err.message);
    }
} 

init();