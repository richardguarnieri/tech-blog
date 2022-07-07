const express = require('express');
const router = express.Router();
const { Comment } = require('./../../models');
const { BlogComment } = require('./../../models');

router.post('/add', async (req, res) => {
    const { content, blogId } = req.body;
    const userId = 1; // TO FIX
    const response = await Comment.create({
        content: content,
        userId: userId
    });
    const responseParsed = JSON.parse(JSON.stringify(response));
    console.log(responseParsed);
    const blogComment = await BlogComment.create({
        blogId: blogId,
        commentId: responseParsed.id,
    })
    res.redirect('/');
})

module.exports = router;