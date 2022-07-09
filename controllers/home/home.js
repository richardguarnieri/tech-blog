const express = require('express');
const router = express.Router();

const { User } = require('./../../models');
const { Blog } = require('./../../models');
const { Comment } = require('./../../models');

router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.findAll({
            // https://sequelize.org/v3/docs/models-usage/index.html#nested-eager-loading
            include: [
                {model: User},
                {model: Comment, include: User}
            ]
        });
        const blogsParsed = JSON.parse(JSON.stringify(blogs));
        res.render('home', {blogsParsed, loggedIn: req.session.loggedIn});
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;