const express = require('express');
const router = express.Router();
const { User } = require('./../models');
const { Blog } = require('./../models');
const { Comment } = require('./../models');

const api = require('./api');
const signin = require('./signin');
const signup = require('./signup');
const dashboard = require('./dashboard');
const createPost = require('./createPost');
const updatePost = require('./updatePost');

router.use('/api', api);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/dashboard', dashboard);
router.use('/createPost', createPost);
router.use('/updatePost', updatePost);

router.get('/', async (req, res) => {
    const response = await Blog.findAll({
            // https://sequelize.org/v3/docs/models-usage/index.html#nested-eager-loading
            include: [
                {model: User},
                {model: Comment, include: User}
            ]
            });
    const responseParsed = JSON.parse(JSON.stringify(response));
    // res.json(responseParsed)
    res.render('home', {responseParsed});
})

module.exports = router;