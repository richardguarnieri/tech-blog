const express = require('express');
const router = express.Router();
const { User } = require('./../../models');
 
router.post('/signin', async (req, res) => {
    const message = 'Incorrect username or password, please try again!';
    try {
        console.log(req.body);
        const { username, password } = req.body;
        const response = await User.findOne({where: {username: username}});
        if (!response) {
            res.json({
                success: false,
                message: message
            });
            return;
        }
        const isValidPassword = response.validatePassword(password);
        if (!isValidPassword) {
            res.json({
                success: false,
                message: message
            });
            return;
        }
        res.status(200).json({
            success: true,
        });
    } catch (err) {
        res.status(500).json(err.message);
    }
})

router.post('/signup', async (req, res) => {
    const message = 'Credentials do not follow guidelines, please try again!';
    try {
        const { email, username, password } = req.body;
        const response = await User.create({
            email, username, password
        });
        res.status(200).json({
            success: true,
        });
    } catch (err) {
        res.json({
            success: false,
            message: message,
            error: err.message,
        });
    }
})

module.exports = router;