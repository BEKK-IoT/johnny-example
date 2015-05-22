var express = require('express');
var os = require("os");
var raspiConnection = require("./raspitest");

var app = express();
var hostname = os.hostname();
raspiConnection.init();
app.get('/', function (req, res) {
  raspiConnection.isLightOn() === 1 ? raspiConnection.turnLightOff() : raspiConnection.turnLightOn(); 
  res.send('<html><body>Hello from Node.js container ' + hostname + ' with light status '+raspiConnection.isLightOn()+'</body></html>');
});

app.listen(80);
console.log('Running on http://localhost');
