const express = require('express');
const {
    createRestaurant,
    retrieveRestaurant,
    modifyRestaurant,
    removeRestaurant,
} = require('./index');

const router = express.Router();

// Create a new restaurant
router.post('/', async (req, res) => {
    try {
        const restaurant = await createRestaurant(req.body);
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: 'Error creating restaurant', error: error.message });
    }
});

// Get a restaurant by ID
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await retrieveRestaurant(req.params.id);
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(404).json({ message: 'Restaurant not found', error: error.message });
    }
});

// Update a restaurant
router.put('/:id', async (req, res) => {
    try {
        const updatedRestaurant = await modifyRestaurant(req.params.id, req.body);
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ message: 'Error updating restaurant', error: error.message });
    }
});

// Delete a restaurant
router.delete('/:id', async (req, res) => {
    try {
        await removeRestaurant(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting restaurant', error: error.message });
    }
});

module.exports = router;
