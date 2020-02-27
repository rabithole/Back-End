const express = require('express');

const Profiles = require('./users-model');

const router = express.Router();

router.use(express.json());



module.exports = router;