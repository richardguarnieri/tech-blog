const express = require('express');
const router = express.Router();

const { Blog } = require('./../../models');

// Create Post
router.post('/create', async (req, res) => {
    try {
        const { title, content } = req.body;
        const userId = 2; // TO FIX
        const blog = await Blog.create({
            title, content, userId
        });
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// Update Post
router.post('/update', async (req, res) => {
    try {
        const { id, title, content } = req.body;
        const blog = await Blog.update({title, content}, {
            where: {id}
        })
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

// Delete Post
router.delete('/delete', async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.destroy({
            where: {id}
        })
        res.status(200).json({
            success: true,
            message: `Blog ${id} has been sucessfully deleted`
        });
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;