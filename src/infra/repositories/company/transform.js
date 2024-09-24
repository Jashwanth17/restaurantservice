const transformCompanyData = (data) => {
  return {
      id: data.id,
      name: data.name,
      location: data.location,
      cuisine: data.cuisine,
  };
};

module.exports = {
  transformCompanyData,
};
