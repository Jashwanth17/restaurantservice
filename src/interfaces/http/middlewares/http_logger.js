const httpLogger = (req, res, next) => {
  const { method, url } = req; 
  const timestamp = new Date().toISOString(); 
  console.log(`[${timestamp}] ${method} ${url}`); 
  next();
};

module.exports = httpLogger;
