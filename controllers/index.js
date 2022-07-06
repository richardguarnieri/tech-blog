const express = require('express');
const router = express.Router();

const api = require('./api');
const signin = require('./signin');
const signup = require('./signup');
const dashboard = require('./dashboard');

router.use('/api', api);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/dashboard', dashboard);

router.get('/', (req, res) => {
    res.render('home');
})

module.exports = router;