const express = require('express');
const router = express.Router();
const Comment = require('./../models/Comment');

router.get('/comments', async (req, res) => {
    const response = await Comment.findAll();
    res.status(200).json(response);
})

module.exports = router;