const { createUser, getUserById, updateUser, deleteUser } = require('../../database/models/user');

const addUser = async (data) => {
    return await createUser(data);
};

const getUser = async (id) => {
    return await getUserById(id);
};

const editUser = async (id, data) => {
    return await updateUser(id, data);
};

const removeUser = async (id) => {
    return await deleteUser(id);
};

module.exports = {
    addUser,
    getUser,
    editUser,
    removeUser,
};
