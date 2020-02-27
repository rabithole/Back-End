const express = require('express');

const Profiles = require('./profiles-model');

const router = express.Router();

router.use(express.json());



module.exports = router;