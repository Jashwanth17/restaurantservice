/*const express = require('express');
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

module.exports = { app, start }; */

const express = require('express')

module.exports = ({ config, router, logger, auth }) => {
  const app = express()

  app.disable('x-powered-by')
  app.use(auth.initialize())
  app.use(router)

  // we define our static folder
  app.use(express.static('public'))

  return {
    app,
    start: () => new Promise((resolve) => {
      const http = app.listen(config.port, () => {
        const { port } = http.address()
        logger.info(`🤘 API - Port ${port}`)
      })
    })
  }
}
