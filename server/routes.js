const express	= require('express');
const request = require('request');
const router 	= express.Router();

// My models
const UsersModel  = require('./models/users');
const VenueModel  = require('./models/venues');
const SpaceModel  = require('./models/spaces');


router.get('/test', (req, res) => {
  res.send("<h1>Server Up & Running</h1>")
});

router.get('/v1/user', (req, res) => {
  UsersModel.find((err, users) => {
    if (err) {
      console.error(err);
      res.sendStatus(404).send('Failed to get users');
      return;
    }
    res.json(users);
  })
});

router.get('/v1/venue', (req, res) => {
  VenueModel.find((err, venues) => {
    if (err) {
      console.error(err);
      res.sendStatus(404).send('Failed to get venues');
      return;
    }
    res.json(venues);
  })
});

router.get('/v1/venue/:id', (req, res) => {
  const id = req.params.id;
  VenueModel.findById(id, (err, venue) => {
    if (err) {
      console.error(err);
      res.sendStatus(404).send(`Failed to get the venue with id ${id}`);
      return;
    }
    res.json(venue);
  })
});

router.get('/v1/space/:id', (req, res) => {
  const id = req.params.id;
  SpaceModel.findById(id, (err, space) => {
    if (err) {
      console.error(err);
      res.sendStatus(404).send(`Failed to get space with id ${id}`);
      return;
    }
    res.json(space);
  })
});


module.exports = router;