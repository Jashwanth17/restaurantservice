const { createContainer, asValue, asFunction } = require("awilix");

const app = require("./app");
const server = require("./interfaces/http/server");
const router = require("./interfaces/http/router");
const auth = require("./interfaces/http/auth");
const config = require("../config");
const logger = require("./infra/logging/logger");
const database = require("./infra/database");
const jwt = require("./infra/jwt");
const response = require("./infra/support/response");
const date = require("./infra/support/date");
const repository = require("./infra/repositories");

const container = createContainer();

container.register({
  // Register functions using asFunction
  app: asFunction(app).singleton(),
  router: asFunction(router).singleton(),
  auth: asFunction(auth).singleton(),
  response: asFunction(response).singleton(),
  date: asFunction(date).singleton(),

  // Register objects using asValue
  server: asValue(server),
  logger: asValue(logger),
  database: asValue(database),
  jwt: asValue(jwt),
  config: asValue(config),
  repository: asValue(repository),
});

module.exports = container;