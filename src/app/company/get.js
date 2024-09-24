const Restaurant = require('../../infra/database/models/company');

const getRestaurantDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const restaurant = await Restaurant.findById(id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(restaurant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = getRestaurantDetails;
