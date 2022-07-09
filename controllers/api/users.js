const express = require('express');
const router = express.Router();

const { User } = require('./../../models');
 
// Sign Up
router.post('/signup', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const user = await User.create({
            email, username, password
        });
        req.session.save(() => {
            req.session.userId = user.id
            req.session.username = username;
            req.session.loggedIn = true;
            console.log(req.session.userId);
            res.status(200).json({success: true});
        });
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
})

// Sign In
router.post('/signin', async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({where: {username: username}});
        if (!user) {
            res.status(500).json({success: false});
            return;
        }
        const isValidPassword = user.validatePassword(password);
        if (!isValidPassword) {
            res.status(500).json({success: false});
            return;
        }
        req.session.save(() => {
            req.session.userId = user.id
            req.session.username = username;
            req.session.loggedIn = true;
            res.status(200).json({success: true});
        });
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
})

// Sign Out
router.post('/signout', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            req.session.destroy(() => {
                res.status(204).end();
            })
        } else {
            res.status(404).end();
        }
    } catch (err) {
        res.status(500).json({success: false, message: err.message});
    }
})

module.exports = router;