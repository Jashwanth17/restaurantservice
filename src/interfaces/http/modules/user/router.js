const express = require('express');
const {
    createUser,
    retrieveUser,
    modifyUser,
    removeUser,
} = require('./index');

const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await retrieveUser(req.params.id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: 'User not found', error: error.message });
    }
});

// Update a user
router.put('/:id', async (req, res) => {
    try {
        const updatedUser = await modifyUser(req.params.id, req.body);
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
});

// Delete a user
router.delete('/:id', async (req, res) => {
    try {
        await removeUser(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
});

module.exports = router;
