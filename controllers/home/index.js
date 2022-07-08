const express = require('express');
const router = express.Router();

const home = require('./home');
const signin = require('./signin');
const signup = require('./signup');
const dashboard = require('./dashboard');
const createPost = require('./createPost');
const updatePost = require('./updatePost');

router.use('/', home);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/dashboard', dashboard);
router.use('/createPost', createPost);
router.use('/updatePost', updatePost);

module.exports = router;