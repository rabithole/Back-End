const express = require('express');
const Profiles = require('./profiles-model');
const restricted = require('../auth/restricted-middleware.js');

const router = express.Router();

router.use(express.json());

router.get('/',restricted, (req, res) => {
    Profiles.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

router.get('/:id',restricted, (req, res) => {
    Profiles.findById(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

router.get('/public/:id', (req, res) => {
  Profiles.getPublicProfile(req.params.id)
  .then(profile => {
    res.status(200).json(profile);
  })
  .catch(error => {
    res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
});
})

router.post('/', restricted, (req, res) => {
    Profiles.add(req.body)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

router.put('/:id', restricted, (req, res) => {
    const { id } = req.params;
    const changes = req.body;
  
    Profiles.findById(id)
    .then(profile => {
        
      if (profile) {
        Profiles.update(changes, id)
        .then(updatedProfile => {
          Profiles.findById(id)
          .then(data => {
            res.status(200).json(data);
          }) 
          .catch(error => { 
            res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
          })       
        });
      } else {
        res.status(404).json({ message: 'Could not find profile with given id' });
      }
    })
    .catch (error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
  });

module.exports = router;

