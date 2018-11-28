const http 		= require('http');
const express 	= require('express');
const bodyParser = require('body-parser');
const cors 		= require('cors');
const router	= require('./routes.js');

const app  = express();
app.server = http.createServer(app);

// PORT where the server is listening
const PORT = 3000;

// CORS - middleware for enabling cross-origin resource sharing 
app.use(cors());

// These are middleware for handling request objects
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Static files to be read from dist folder
app.use(express.static(dist));

// We put all the GET/POST routes in a separate file
app.use('/', router);

app.server.listen(PORT); 
console.log(`Started the app on port ${PORT}`);
