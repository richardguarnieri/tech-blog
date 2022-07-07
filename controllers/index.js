const express = require('express');
const router = express.Router();
const { User } = require('./../models');
const { Blog } = require('./../models');
const { Comment } = require('./../models');
const { BlogComment } = require('./../models');

const api = require('./api');
const signin = require('./signin');
const signup = require('./signup');
const dashboard = require('./dashboard');
const createPost = require('./createPost');

router.use('/api', api);
router.use('/signin', signin);
router.use('/signup', signup);
router.use('/dashboard', dashboard);
router.use('/createPost', createPost);

// router.get('/', async (req, res) => {
//     const response = await Blog.findAll({raw: true, nest: true, include: User});
//     console.log(response);
//     res.json(response)
//     // res.render('home', {response});
// })

router.get('/', async (req, res) => {
    const response = await Blog.findAll({include: [{model: User, model: Comment, include: [User]}]
    });
    const responseParsed = JSON.parse(JSON.stringify(response));
    // res.json(responseParsed)
    res.render('home', {responseParsed});
})

module.exports = router;