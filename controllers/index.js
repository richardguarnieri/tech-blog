const express = require('express');
const router = express.Router();

const homeRoutes = require('./home');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;