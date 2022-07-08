const express = require('express');
const router = express.Router();

const { User } = require('./../../models');
 
// Sign Up
router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        await User.create({
            email, username, password
        });
        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
})

// Sign In
router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const response = await User.findOne({where: {username: username}});
        if (!response) {
            res.status(500).json({success: false});
            return;
        }
        const isValidPassword = response.validatePassword(password);
        if (!isValidPassword) {
            res.status(500).json({success: false});
            return;
        }
        res.status(200).json({success: true});
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
})

module.exports = router;