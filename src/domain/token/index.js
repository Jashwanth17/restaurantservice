const jwt = require('jsonwebtoken');

class Token {
    // Generate a JWT token
    static generateToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
    }

    // Verify a JWT token
    static verifyToken(token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            return decoded;
        } catch (error) {
            throw new Error('Token is invalid or expired');
        }
    }
}

module.exports = Token;
