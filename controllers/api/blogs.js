const express = require('express');
const router = express.Router();
const { Blog } = require('./../../models');

router.post('/create', async (req, res) => {
    const { title, content } = req.body;
    const userId = 2; // TO FIX
    const response = await Blog.create({
        title: title,
        content: content,
        userId: userId
    });
    console.log(response);
    res.redirect('/');
})

module.exports = router;