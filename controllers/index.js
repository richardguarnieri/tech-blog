const express = require('express');
const router = express.Router();
const users = require('./users');
const blogs = require('./blogs');

router.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

router.use('/users', users);
router.use('/blogs', blogs);

const Comment = require('./../models/Comment');

router.get('/comments', async (req, res) => {
    const response = await Comment.findAll();
    res.status(200).json(response);
})

module.exports = router;