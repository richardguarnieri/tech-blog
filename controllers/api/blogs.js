const express = require('express');
const router = express.Router();
const { Blog } = require('./../../models');
const { Comment } = require('./../../models');

router.get('/', async (req, res) => {
    const response = await Blog.findAll({
        include: Comment
    });
    console.log(response);
    res.status(200).json(response);
})

module.exports = router;