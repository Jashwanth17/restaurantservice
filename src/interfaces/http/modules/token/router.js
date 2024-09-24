const express = require('express');
const { createToken } = require('./index');

const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const token = createToken(req.body.user);
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error generating token', error: error.message });
    }
});

module.exports = router;
