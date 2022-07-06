const express = require('express');
const router = express.Router();
const { Blog } = require('./../../models');

router.get('/', async (req, res) => {
    const response = await Blog.findAll();
    res.status(200).json(response);
})

module.exports = router;