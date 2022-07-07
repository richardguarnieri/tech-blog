const express = require('express');
const router = express.Router();
const { Blog } = require('./../models')
const { User } = require('./../models')

router.get('/', async (req, res) => {
    const userId = 2; // TO FIX
    const response = await Blog.findAll({
        where: {
            userId: userId
        },
        include: User
    });
    const responseParsed = JSON.parse(JSON.stringify(response));
    // res.json(responseParsed)
    res.render('dashboard', {responseParsed});
})

module.exports = router;