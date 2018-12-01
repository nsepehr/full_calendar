const express	= require('express');
const request = require('request');
const mongoose= require('mongoose');
const router 	= express.Router();
const Schema  = mongoose.Schema;

// Mongod Connection variables
const MongoHost   = "localhost";
const MongoPort   = 27017;
const MongoDbName = "perfect_venue";

const connection = "mongodb://" + MongoHost + ":" + MongoPort + "/" + MongoDbName;
mongoose.connect(connection);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const ObjectId = mongoose.Schema.Types.ObjectId;
const user_schema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
    unique: true
  },
  venues: [ObjectId]
});

var UsersModel = mongoose.model('Users', user_schema, 'users');

router.get('/test', (req, res) => {
  res.send("<h1>Server Up & Running</h1>")
});

router.get('/v1/user', (req, res) => {
  UsersModel.find((err, users) => {
    if (err) {
      console.log(err);
      res.sendStatus(404).send('Failed to get users');
      return;
    }
    res.json(users);
  })
});

module.exports = router;