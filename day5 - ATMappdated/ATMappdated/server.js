var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/atmModel'), //created model loading here
  bodyParser = require('body-parser');

app.set('view engine', 'ejs');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/atmAppdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/atmRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Making the magic happen on port ' + port);
