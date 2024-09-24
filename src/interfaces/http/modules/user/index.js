const { addUser, getUserDetails, updateUser, deleteUser } = require('../../../../domain/user');

const createUser = async (data) => {
    const newUser = await addUser(data);
    return newUser;
};

const retrieveUser = async (id) => {
    const user = await getUserDetails(id);
    return user;
};

const modifyUser = async (id, data) => {
    const updatedUser = await updateUser(id, data);
    return updatedUser;
};

const removeUser = async (id) => {
    await deleteUser(id);
};

module.exports = {
    createUser,
    retrieveUser,
    modifyUser,
    removeUser,
};
