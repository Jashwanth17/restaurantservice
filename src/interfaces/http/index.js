const swaggerJSDoc = require('swagger-jsdoc');
const Status = require('http-status');
const { Router } = require('express');
const swaggerUi = require('swagger-ui-express');

module.exports = () => {
  const router = Router();

  // Swagger definition
  const swaggerDefinition = {
    openapi: '3.0.0',  // Ensure you're using OpenAPI 3.0.0
    info: {
      title: 'Restaurant Service',
      version: '1.0.0',
      description: 'Available REST Endpoints of User Management',
    },
    servers: [
      {
        url: `http://${process.env.API_SWAGGER}:${process.env.PORT}`, 
      },
    ],
    components: {
      securitySchemes: {
        JWT: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
          description: 'JWT Authorization header using the Bearer scheme. Example: "Authorization: Bearer {token}"',
        },
      },
    },
  };

  const options = {
    swaggerDefinition,
    apis: [
      './src/interfaces/http/modules/company/router.js', 
      './src/interfaces/http/modules/token/router.js', 
      './src/interfaces/http/modules/user/router.js'
    ]
  };
  

  // Initialize swagger-jsdoc
  const swaggerSpec = swaggerJSDoc(options);

  /**
   * @swagger
   * responses:
   *   Unauthorized:
   *     description: Unauthorized
   *   BadRequest:
   *     description: BadRequest / Invalid Input
   */

  /**
   * @swagger
   * /:
   *   get:
   *     tags:
   *       - Status
   *     description: Returns API status
   *     produces:
   *       - application/json
   *     responses:
   *       200:
   *         description: API Status
   */
  router.get('/', (req, res) => {
    res.status(Status.OK).json({ status: 'API working' });
  });


  // Serve the Swagger documentation at /api-docs
  router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  console.log('Swagger documentation is available at /api-docs');

  return router;
};
