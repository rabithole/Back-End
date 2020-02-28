const express = require('express');
const Trips = require('./trips-model');
const restricted = require('../auth/restricted-middleware.js');

const router = express.Router();

router.use(express.json());

router.get('/',restricted, (req, res) => {
    Trips.find()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

router.get('/:id',restricted, (req, res) => {
    Trips.findById(req.params.id)
    .then(data => {
        res.status(200).json(data);
    })
    .catch(error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
})

router.post('/',restricted, (req, res) => {
    Trips.add(req.body)
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
  
    Trips.findById(id)
    .then(trip => {
      if (trip) {
        Trips.update(changes, id)
        .then(updatedTrip => {
          Trips.findById(id)
          .then(data => {
            res.status(200).json(data);
          }) 
          .catch(error => { 
            res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
          })       
        });
      } else {
        res.status(404).json({ message: 'Could not find a trip with given id' });
      }
    })
    .catch (error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
  });

  router.delete('/:id', (req, res) => {
    const { id } = req.params;
  
    Trips.remove(id)
    .then(deleted => {
      if (deleted) {
        res.status(200).json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find a trip with given id' });
      }
    })
    .catch (error => {
        res.status(500).json({message: 'Internal Server Error, Error Returned: ' + error })
    });
  });

module.exports = router;