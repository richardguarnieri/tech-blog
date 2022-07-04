const express = require('express');
const router = express.Router();
const api = require('./api');

router.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

router.use('/api', api);

module.exports = router;