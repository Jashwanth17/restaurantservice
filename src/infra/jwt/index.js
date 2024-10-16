const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'your-secret-key'; 

// Function to generate a JWT token
function generateToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: '1h' }); // Token expires in 1 hour
}

// Function to verify JWT token
function verifyToken(token) {
  return jwt.verify(token, secret);
}

module.exports = {
  generateToken,
  verifyToken
};
