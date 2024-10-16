const { generateToken } = require('../../infra/jwt');
const { User } = require('../../domain/user/user'); // Import the User model for validation

// Login function to generate JWT token
async function login(req, res) {
  const { user } = req.body;

  // Check if the user ID is provided
  if (!user || !user.id) {
    return res.status(400).json({ error: 'User ID is required' });
  }

  const { id } = user;

  try {
    // Verify if the user exists in the database
    const foundUser = await User.findOne({ where: { id } });

    if (!foundUser) {
      return res.status(404).json({ error: 'Invalid user ID' });
    }

    // Generate JWT token for valid user
    const token = generateToken({ id: foundUser.id });

    // Return the token in the response
    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = login;
