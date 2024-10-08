const { createRestaurant, getRestaurantById, updateRestaurant, deleteRestaurant } = require('../../database/models/company');

const addRestaurant = async (data) => {
    return await createRestaurant(data);
};

const getRestaurant = async (id) => {
    return await getRestaurantById(id);
};

const editRestaurant = async (id, data) => {
    return await updateRestaurant(id, data);
};

const removeRestaurant = async (id) => {
    return await deleteRestaurant(id);
};

module.exports = {
    addRestaurant,
    getRestaurant,
    editRestaurant,
    removeRestaurant,
};

