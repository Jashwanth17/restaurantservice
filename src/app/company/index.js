const express = require('express');
const post = require('./post');
const get = require('./get');
const put = require('./put');
const del = require('./delete');

const router = express.Router();

router.post('/', post);
router.get('/:id', get);
router.put('/:id', put);
router.delete('/:id', del);

module.exports = router;

