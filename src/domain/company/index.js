
const Restaurant = require('./company');

let restaurants = []; // In-memory storage for restaurants

const addRestaurant = (data) => {
    const restaurant = new Restaurant(data.name, data.location, data.cuisine);
    restaurants.push(restaurant);
    return restaurant;
};

const updateRestaurant = (id, data) => {
    const restaurant = restaurants[id];
    if (!restaurant) throw new Error('Restaurant not found');
    restaurant.name = data.name || restaurant.name;
    restaurant.location = data.location || restaurant.location;
    restaurant.cuisine = data.cuisine || restaurant.cuisine;
    return restaurant;
};

const deleteRestaurant = (id) => {
    const restaurant = restaurants[id];
    if (!restaurant) throw new Error('Restaurant not found');
    restaurants.splice(id, 1);
    return restaurant;
};

const getRestaurantDetails = (id) => {
    const restaurant = restaurants[id];
    if (!restaurant) throw new Error('Restaurant not found');
    return restaurant;
};

module.exports = {
    addRestaurant,
    updateRestaurant,
    deleteRestaurant,
    getRestaurantDetails,
};
