const express = require('express');
const router = express.Router();
const users = require('./users');

router.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

router.use('/users', users);

const Blog = require('./../models/Blog');

router.get('/blogs', async (req, res) => {
    const response = await Blog.findAll();
    res.status(200).json(response);
})
const Comment = require('./../models/Comment');

router.get('/comments', async (req, res) => {
    const response = await Comment.findAll();
    res.status(200).json(response);
})

module.exports = router;