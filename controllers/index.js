const express = require('express');
const router = express.Router();
const users = require('./users');
const blogs = require('./blogs');
const comments = require('./comments');

router.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

router.use('/users', users);
router.use('/blogs', blogs);
router.use('/comments', comments);

module.exports = router;