const express = require('express');
const router = express.Router();
const { Comment } = require('./../../models');

router.post('/add', async (req, res) => {
    const { content } = req.body;
    const userId = 1; // TO FIX
    const response = await Comment.findAll();
    res.status(200).json(response);
})

module.exports = router;