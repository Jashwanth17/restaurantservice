const { generateToken } = require('../../../../domain/token');

// Generate token
const createToken = (user) => {
    const token = generateToken(user);
    return token;
};

module.exports = {
    createToken,
};

