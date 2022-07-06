const express = require('express');
const router = express.Router();
const User = require('./../../models/User');

router.post('/signin', async (req, res) => {
    try {
        console.log(req.body);
        const { username, password } = req.body;
        const response = await User.findOne({where: {username: username}});
        console.log(response);
        if (!response) {
            res.status(500).json({ message: 'Incorrect username or password, please try again' });
            return;
        }
        const isValidPassword = response.validatePassword(password);
        if (!isValidPassword) {
            res.status(500).json({ message: 'Incorrect username or password, please try again' });
            return;
        }
        res.redirect('/dashboard');
    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        await User.create({
            email, username, password
        });
        res.redirect('/');
    } catch (err) {
        res.status(500).json(err.message);
    }
})

module.exports = router;