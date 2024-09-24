const { addRestaurant, getRestaurantDetails, updateRestaurant, deleteRestaurant } = require('../../../../domain/company');

const createRestaurant = async (data) => {
    const newRestaurant = await addRestaurant(data);
    return newRestaurant;
};

const retrieveRestaurant = async (id) => {
    const restaurant = await getRestaurantDetails(id);
    return restaurant;
};

const modifyRestaurant = async (id, data) => {
    const updatedRestaurant = await updateRestaurant(id, data);
    return updatedRestaurant;
};

const removeRestaurant = async (id) => {
    await deleteRestaurant(id);
};

module.exports = {
    createRestaurant,
    retrieveRestaurant,
    modifyRestaurant,
    removeRestaurant,
};
