const express = require('express');

const Users = require('../users/users-model');

const router = express.Router();

router.use(express.json());


module.exports = router;