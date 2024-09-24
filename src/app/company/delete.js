const Restaurant = require('../../infra/database/models/company');

const deleteRestaurant = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedRestaurant = await Restaurant.findByIdAndDelete(id);
        if (!deletedRestaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = deleteRestaurant;
