const createUser = require('./post');
const retrieveUser = require('./get');
const modifyUser = require('./put');
const removeUser = require('./delete');

module.exports = {
    createUser,
    retrieveUser,
    modifyUser,
    removeUser
};