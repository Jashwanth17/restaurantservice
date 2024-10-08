const Restaurant = require('./company');

// Add a new restaurant to the database
const addRestaurant = async (data) => {
    try {
        const restaurant = await Restaurant.create({
            name: data.name,
            location: data.location,
            cuisine: data.cuisine,
        });
        return restaurant;
    } catch (error) {
        throw new Error('Error adding restaurant: ' + error.message);
    }
};

// Update an existing restaurant in the database
const updateRestaurant = async (id, data) => {
    try {
        const restaurant = await Restaurant.findByPk(id);
        if (!restaurant) throw new Error('Restaurant not found');

        // Update restaurant details
        restaurant.name = data.name || restaurant.name;
        restaurant.location = data.location || restaurant.location;
        restaurant.cuisine = data.cuisine || restaurant.cuisine;
        await restaurant.save(); 

        return restaurant;
    } catch (error) {
        throw new Error('Error updating restaurant: ' + error.message);
    }
};

// Delete a restaurant from the database
const deleteRestaurant = async (id) => {
    try {
        const restaurant = await Restaurant.findByPk(id)
        if (!restaurant) throw new Error('Restaurant not found');

        await restaurant.destroy(); 
        return restaurant;
    } catch (error) {
        throw new Error('Error deleting restaurant: ' + error.message);
    }
};

// Get details of a restaurant from the database
const getRestaurantDetails = async (id) => {
    try {
        const restaurant = await Restaurant.findByPk(id);
        if (!restaurant) throw new Error('Restaurant not found');
        return restaurant;
    } catch (error) {
        throw new Error('Error fetching restaurant details: ' + error.message);
    }
};

module.exports = {
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getRestaurantDetails,
};
