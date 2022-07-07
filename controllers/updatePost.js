const express = require('express');
const router = express.Router();
const { Blog } = require('./../models');

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const response = await Blog.findByPk(id, {
        attributes: ['title', 'content']
    });
    const blogData = {
        id: id,
        title: response.title,
        content: response.content

    }
    res.render('updatePost', {blogData})
})



module.exports = router;