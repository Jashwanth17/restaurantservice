const User = require('./user'); 

// Add a new restaurant to the database
const addUser = async (data) => {
    try {
        const user = await User.create({
            name: data.name, 
            email: data.email,
            password: data.password,
        });
        return user;
    } catch (error) {
        throw new Error('Error adding user: ' + error.message);
    }
};

// Update an existing user in the database
const updateUser = async (id, data) => {
    try {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');

        // Update user details
        user.name = data.name || user.name;
        user.email = data.email || user.email;
        user.password = data.password || user.password;
        await user.save();

        return user;
    } catch (error) {
        throw new Error('Error updating user: ' + error.message);
    }
};

// Delete a user from the database
const deleteUser = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');

        await user.destroy();
        return user;
    } catch (error) {
        throw new Error('Error deleting user: ' + error.message);
    }
};

// Get details of a user from the database
const getUserDetails = async (id) => {
    try {
        const user = await User.findByPk(id);
        if (!user) throw new Error('User not found');
        return user;
    } catch (error) {
        throw new Error('Error fetching user details: ' + error.message);
    }
};

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getUserDetails,
};
