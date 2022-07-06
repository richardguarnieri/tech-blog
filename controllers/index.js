const express = require('express');
const router = express.Router();

const api = require('./api');

router.get('/', (req, res) => {
    res.render('home');
})

router.use('/api', api);

module.exports = router;