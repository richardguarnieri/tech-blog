const express = require('express');
const router = express.Router();

const users = require('./users');
const blogs = require('./blogs');
const comments = require('./comments');
const signIn = require('./signIn');

router.use('/users', users);
router.use('/blogs', blogs);
router.use('/comments', comments);
router.use('/signIn', signIn);

module.exports = router;