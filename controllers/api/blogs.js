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
    res.redirect('/dashboard');
})

router.post('/update', async (req, res) => {
    console.log(req.body);
    const { blogId, title, content } = req.body;
    const response = await Blog.update({title: title, content: content}, {
        where: {
            id: blogId,
        }
    })
    // console.log(response);
    res.redirect('/dashboard');
})

router.delete('/delete', async (req, res) => {
    console.log(req.body);
    const { id } = req.body;
    const response = await Blog.destroy({
        where: {
            id: id,
        }
    })
    res.status(200).json({
        success: true,
        message: `Blog ${id} has been sucessfully deleted`
    });
})

module.exports = router;