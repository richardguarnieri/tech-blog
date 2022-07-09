const sequelize = require('./config/connection');
const express = require('express');
const routes = require('./controllers');
const { create } = require('express-handlebars');
const helpers = require('./utils/helpers')
const session = require('express-session');

const app = express();
const port = process.env.PORT || 3001;

// Handlebars Setup
const hbs = create({ helpers })
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Session Setup
const sess = {
    secret: 'unhackable secret word',
    resave: false,
    saveUninitialized: false,
}
app.use(session(sess));

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