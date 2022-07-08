const express = require('express');
const router = express.Router();

const { Comment } = require('./../../models');
const { BlogComment } = require('./../../models');

// Create Comment
router.post('/add', async (req, res) => {
    try {
        // create comment on Comment table
        const userId = 1; // TO FIX
        const { content, blogId } = req.body;
        const comment = await Comment.create({
            content, userId
        });
        const commentParsed = JSON.parse(JSON.stringify(comment));

        // create entry on BlogComment table
        const blogComment = await BlogComment.create({
            blogId,
            commentId: commentParsed.id,
        })
        res.redirect('/')
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;