const Restaurant = require('../../infra/database/models/company');

const addRestaurant = async (req, res) => {
    try {
        const { name, location, cuisine } = req.body;
        const newRestaurant = new Restaurant({ name, location, cuisine });
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = addRestaurant;

