const http 		  = require('http');
const express 	= require('express');
const bodyParser = require('body-parser');
const cors 		  = require('cors');
const path      = require('path');
const mongoose  = require('mongoose');
const router	  = require('./routes.js');

// Express server setup
const app  = express();
app.server = http.createServer(app);

// My variables
const dist = path.resolve(__dirname, '../dist/')

// PORT where the server is listening
const PORT = 3000;


// Mongod Connection
const MongoHost   = "localhost";
const MongoPort   = 27017;
const MongoDbName = "perfect_venue";

const connection = "mongodb://" + MongoHost + ":" + MongoPort + "/" + MongoDbName;
mongoose.connect(connection);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));



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