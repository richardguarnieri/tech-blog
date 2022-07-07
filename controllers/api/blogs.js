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

// router.get('/:id', async (req, res) => {
//     const { id } = req.params;
//     const response = await Blog.findByPk(id, {
//         attributes: ['title', 'content']
//     });
//     const blogData = {
//         id: id,
//         title: response.title,
//         content: response.content

//     }
//     // console.log(response);
//     res.render('updatePost', {blogData})
// })

module.exports = router;