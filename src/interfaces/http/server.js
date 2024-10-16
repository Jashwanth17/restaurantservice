const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const dotenv = require('dotenv');
dotenv.config();
const swaggerRouter = require('./index'); 

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(morgan('dev'));

// Route setup
app.use('/api', router);

// Use the Swagger router
app.use(swaggerRouter());

// Register other routes or middleware here if needed
// For example:
app.get('/', (_req, res) => {
  res.send('API is running');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const start = () => {
  const port = process.env.PORT || 6000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

module.exports = { app, start };
