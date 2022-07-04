const express = require('express');
const router = express.Router();
const Blog = require('./../models/Blog');

router.get('/blogs', async (req, res) => {
    const response = await Blog.findAll();
    res.status(200).json(response);
})

module.exports = router;