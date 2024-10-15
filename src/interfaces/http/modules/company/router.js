const express = require('express');
const {
    createRestaurant,
    retrieveRestaurant,
    modifyRestaurant,
    removeRestaurant,
} = require('./index');

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Restaurant
 *   description: Restaurant management API
 */

/**
 * @swagger
 * /api/companies:
 *   post:
 *     summary: Create a new restaurant
 *     tags: [Restaurant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Hakim's Restaurant"
 *               location:
 *                 type: string
 *                 example: "Trichy"
 *               cuisine:
 *                 type: string
 *                 example: "Chinese"
 *     responses:
 *       201:
 *         description: Restaurant created successfully
 *       500:
 *         description: Error creating restaurant
 */
router.post('/', async (req, res) => {
    try {
        const restaurant = await createRestaurant(req.body);
        res.status(201).json(restaurant);
    } catch (error) {
        res.status(500).json({ message: 'Error creating restaurant', error: error.message });
    }
});

/**
 * @swagger
 * /api/companies/{id}:
 *   get:
 *     summary: Get a restaurant by ID
 *     tags: [Restaurant]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Restaurant ID
 *     responses:
 *       200:
 *         description: Restaurant details
 *       404:
 *         description: Restaurant not found
 *       500:
 *         description: Error retrieving restaurant
 */
router.get('/:id', async (req, res) => {
    try {
        const restaurant = await retrieveRestaurant(req.params.id);
        res.status(200).json(restaurant);
    } catch (error) {
        res.status(404).json({ message: 'Restaurant not found', error: error.message });
    }
});

/**
 * @swagger
 * /api/companies/{id}:
 *   put:
 *     summary: Update a restaurant
 *     tags: [Restaurant]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Restaurant ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               cuisine:
 *                 type: string
 *     responses:
 *       200:
 *         description: Restaurant updated successfully
 *       404:
 *         description: Restaurant not found
 *       500:
 *         description: Error updating restaurant
 */
router.put('/:id', async (req, res) => {
    try {
        const updatedRestaurant = await modifyRestaurant(req.params.id, req.body);
        res.status(200).json(updatedRestaurant);
    } catch (error) {
        res.status(500).json({ message: 'Error updating restaurant', error: error.message });
    }
});

/**
 * @swagger
 * /api/companies/{id}:
 *   delete:
 *     summary: Delete a restaurant
 *     tags: [Restaurant]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Restaurant ID
 *     responses:
 *       204:
 *         description: Restaurant deleted successfully
 *       500:
 *         description: Error deleting restaurant
 */
router.delete('/:id', async (req, res) => {
    try {
        await removeRestaurant(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting restaurant', error: error.message });
    }
});

module.exports = router;
