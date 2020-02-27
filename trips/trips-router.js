const express = require('express');
const Profiles = require('./trips-model');
const restricted = require('../auth/restricted-middleware.js');
const router = express.Router();

router.use(express.json());



module.exports = router;