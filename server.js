const express = require("express");
const bodyParser = require("body-parser");
var app = express();
require('./db/connection');
var cors = require('cors');
const song = require('./controllers/song');
const artist = require('./controllers/artist');
const user = require('./controllers/user');
const http = require('http'); // CORE MODULE, USED TO CREATE THE HTTP SERVER
const server = http.createServer(app); // CREATE HTTP SERVER USING APP
const port = process.env.PORT || '6969';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.all('/song/*', (req, res, next) => {
  song(app);
  next();
});
app.all('/artist/*', (req, res, next) => {
  artist(app);
  next();
});

app.all('/user/*', (req, res, next) => {
  user(app);
  next();
});


app.set('port', port);

// LISTEN ON SPECIFIED PORT
server.listen(port);

// LOG WHICH PORT THE SERVER IS RUNNING ON
console.log('Server listening on port ' + port);

// ERROR HANDLER
app.use((err, req, res, next) => {
  console.log(err);
  res.status(err.status || 500).send(err.stack);
});

module.exports = app;