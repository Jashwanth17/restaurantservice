
const express = require('express');
const companyRoutes = require('./modules/company/router'); 
const userRoutes = require('./modules/user/router');     
const tokenRoutes = require('./modules/token/router');  

const router = express.Router();

router.use('/companies', companyRoutes);
router.use('/users', userRoutes);
router.use('/tokens', tokenRoutes);

module.exports = router; 
