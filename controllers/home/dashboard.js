const express = require('express');
const router = express.Router();

const { Blog } = require('./../../models')
const { User } = require('./../../models')

router.get('/', async (req, res) => {
    try {
        const userId = 2; // TO FIX
        const blogs = await Blog.findAll({
            where: {userId},
            include: User
        });
        const blogsParsed = JSON.parse(JSON.stringify(blogs));
        res.render('dashboard', {blogsParsed});
    } catch (err) {
        res.status(500).json({success: false, message: err.message})
    }
});

module.exports = router;