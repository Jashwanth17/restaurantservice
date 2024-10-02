const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');

const app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', router);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const start = () => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

module.exports = { app, start };