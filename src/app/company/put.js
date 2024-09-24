const Restaurant = require('../../infra/database/models/company');

const updateRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedRestaurant = await Restaurant.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.json(updatedRestaurant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = updateRestaurant;
