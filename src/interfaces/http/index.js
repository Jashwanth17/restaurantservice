const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const Status = require('http-status');
const { Router } = require('express');

module.exports = () => {
  const router = Router();

  // Swagger definition
  const swaggerDefinition = {
    info: {
      title: 'Restaurant',
      version: '1.0.0',
      description: 'Available REST Endpoints of User Management'
    },
    host: `${process.env.API_SWAGGER}:${process.env.PORT}/api/${process.env.APP_VERSION}`,
    basePath: '/',
    securityDefinitions: {
      JWT: {
        description: '',
        type: 'apiKey',
        name: 'Authorization',
        in: 'header'
      }
    }
  };

  const options = {
    swaggerDefinition,
    apis: ['./src/interfaces/http/modules/company/router.js', './src/interfaces/http/modules/token/router.js', './src/interfaces/http/modules/user/router.js'], // Adjust path to include your route files
  };

  const swaggerSpec = swaggerJSDoc(options);

  // Serve Swagger docs
  router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  // Sample API status endpoint
  router.get('/', (_, res) => {
    res.status(Status.OK).json({ status: 'API working' });
  });

  return router;
};
