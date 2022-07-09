const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('createPost', {loggedIn: req.session.loggedIn});
})

module.exports = router;