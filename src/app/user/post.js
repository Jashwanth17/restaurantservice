const User = require('../../infra/database/models/user');

const createUser = async (req, res) => {
    try {
        const { username, password, email } = req.body; 
        const newUser = new User({ username, password, email });
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = createUser;