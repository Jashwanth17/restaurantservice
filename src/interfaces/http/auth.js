const jwt = require('jsonwebtoken');
const { User } = require('../../infra/database/models/user');

const authenticate = async (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findByPk(decoded.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found.' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({ message: 'Failed to authenticate token.' });
    }
};

module.exports = authenticate;