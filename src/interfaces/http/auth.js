/*const { verifyToken } = require('../../infra/jwt');

// Middleware to authenticate and verify JWT token
function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Get the token from "Authorization: Bearer <token>"

  if (!token) {
    return res.status(401).json({ error: 'Token is required' });
  }

  try {
    // Verify the JWT token
    const decoded = verifyToken(token);
    req.user = decoded; // Attach decoded token to the request object
    next(); // Continue to the next middleware/route handler
  } catch (error) {
    return res.status(403).json({ error: 'Invalid or expired token' });
  }
}

module.exports = authenticate;
*/

const jwt = require('jsonwebtoken');
const { getUser} = require('../../infra/repositories/user'); // Import the repository's getUser function

module.exports = async function (req, res, next) {
    // Get token from Authorization header
    const authHeader = req.headers['authorization'];

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Invalid token format' });
    }

    const token = authHeader.split(' ')[1]; // Get the token part after 'Bearer '

    try {
        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decodes the token to get the user ID

        
        // Check if user exists
        const user = await getUser(decoded.id); // Use the getUser method from the repository
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        req.user = user; // Attach user info to request object
        next(); // Call the next middleware
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token', error: error.message });
    }
};