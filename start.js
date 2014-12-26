//bootstrap for nodejs

var App = require('./app.js');
App(function cb (port) {
   console.log("Express is ready! (on port %s)",port);
});