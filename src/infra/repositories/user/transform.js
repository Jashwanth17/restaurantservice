const transformUserData = (data) => {
  return {
      id: data.id,
      username: data.username,
      email: data.email,
  };
};

module.exports = {
  transformUserData,
};
