const express = require('express');
const router = express.Router();
const User = require('./../../models/User');

// router.post('/', async (req, res) => {
//     const response = await User.findAll();
//     res.status(200).json(response);
// })

router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const response = User.findOne({where: {username: username}});
        if (!response) {
            res.status(500).send({ message: 'Incorrect username or password!!!, please try again' });
        }
        const isValidPassword = response.validatePassword(password);
        if (!isValidPassword) {
            res.status(500).send('pwd not found');
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
        res.status(500).send(err.message);
    }
})

module.exports = router;