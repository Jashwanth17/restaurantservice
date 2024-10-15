const express = require('express');
const { createToken } = require('./index');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Token
 *   description: JWT Token management API
 */

/**
 * @swagger
 * /token:
 *   post:
 *     summary: Generate a JWT token
 *     tags: [Token]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                     example: "5"
 *                   username:
 *                     type: string
 *                     example: "Jashwanth"
 *     responses:
 *       201:
 *         description: Token generated successfully
 *       500:
 *         description: Error generating token
 */
router.post('/', async (req, res) => {
    try {
        const token = createToken(req.body.user);
        res.status(201).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error generating token', error: error.message });
    }
});

module.exports = router;

