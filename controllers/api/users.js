const express = require('express');
const router = express.Router();
const User = require('./../../models/User');

router.get('/', async (req, res) => {
    const response = await User.findAll();
    res.status(200).json(response);
}
)
router.post('/', async (req, res) => {
    // { } = req.body;
    const response = await User.findAll();
    res.status(200).json(response);
})

module.exports = router;