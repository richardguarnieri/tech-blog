const express = require('express');
const router = express.Router();

const { Blog } = require('./../../models')
const { User } = require('./../../models')

router.get('/', async (req, res) => {
    if (req.session.userId) {
        try {
            // extract userId from session
            const userId = req.session.userId;
            const blogs = await Blog.findAll({
                where: {userId},
                include: User
            });
            const blogsParsed = JSON.parse(JSON.stringify(blogs));
            res.render('dashboard', {blogsParsed, loggedIn: req.session.loggedIn});
        } catch (err) {
            res.status(500).json({success: false, message: err.message})
        }
    } else {
        try {
            res.render('dashboard');
        } catch (err) {
            res.status(500).json({success: false, message: err.message})
        }
    }
});    

module.exports = router;