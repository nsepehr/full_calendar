const express	= require('express');
const request = require('request');
const router 	= express.Router();

router.get('/', (req, res) => {
  res.send("<h1>Server Up & Running</h1>")
});

module.exports = router;