const express = require('express');
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware.js');
const router = express.Router();

router.use(express.json());

router.get('/:id',restricted, (req, res) => {
    Users.GetAllUserData(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

// router.get('/profile/:id',restricted, (req, res) => {
//     Users.GetProfileData(req.params.id)
//     .then(data => {
//         res.status(200).json(data);
//     })
//     .catch(error => {
//         res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
//     });
// })


module.exports = router;