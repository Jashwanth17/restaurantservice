const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const validateRestaurantData = (data) => {
  if (!data.name || !data.location || !data.cuisine) {
      throw new Error('All restaurant fields are required');
  }
};

module.exports = {
  validateEmail,
  validateRestaurantData,
};
