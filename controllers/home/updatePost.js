const express = require('express');
const router = express.Router();

const { Blog } = require('./../../models');

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const blog = await Blog.findByPk(id, {
            attributes: ['title', 'content']
        });
        const blogData = {
            id: id,
            title: blog.title,
            content: blog.content
        };
        res.render('updatePost', {blogData})
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
});

module.exports = router;