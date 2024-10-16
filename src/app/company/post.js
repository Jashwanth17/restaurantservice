/*const Restaurant = require('../../infra/database/models/company');

const addRestaurant = async (req, res) => {
    try {
        const { name, location, cuisine } = req.body;
        const newRestaurant = new Restaurant({ name, location, cuisine });
        await newRestaurant.save();
        res.status(201).json(newRestaurant);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = addRestaurant; */

const { Restaurant } = require('../../domain/company/company'); // Restaurant model

// Route to create restaurant details
async function addRestaurant(req, res) {
  const { name, address, cuisine } = req.body;

  // Validate input fields
  if (!name || !address || !cuisine) {
    return res.status(400).json({ error: 'Restaurant name, address, and cuisine are required' });
  }

  try {
    // Create restaurant associated with authenticated user
    const restaurant = await Restaurant.create({
      name,
      address,
      cuisine,
      userId: req.user.id // Attach authenticated user's ID from the token
    });

    res.status(201).json({ message: 'Restaurant created successfully', restaurant });

  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
}

module.exports = addRestaurant;
