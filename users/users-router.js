const express = require('express');
const Users = require('./users-model');
const restricted = require('../auth/restricted-middleware.js');
const router = express.Router();

router.use(express.json());

router.get('/', restricted, (req, res) => {
    Users.getUsers()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(error => {
      res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
  });
})

router.get('/:id', restricted, (req, res) => {
  Users.getUser(req.params.id)
  .then(user => {
    res.status(200).json(user);
  })
  .catch(error => {
    res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
});
})

router.get('/data/:id',restricted, (req, res) => {
    Users.getUserData(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

router.get('/profiles/:id',restricted, (req, res) => {
  Users.getProfileData(req.params.id)
  .then(data => {
      res.status(200).json(data);
  })
  .catch(error => {
      res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
  });
})

router.get('/trips/:id',restricted, (req, res) => {
    Users.getTripData(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

router.delete('/:id', restricted, (req, res) => {
    const { id } = req.params;
  
    Users.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find user with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete scheme' });
    });
  });

module.exports = router;