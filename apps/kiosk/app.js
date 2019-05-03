const express = require( 'express' );
const passport = require('passport');

const KioskController = require('./controller');
const auth = require('../../src/js/authentication.js');

const app = express();

app.set( 'views', __dirname + '/views' );

app.use((req, res, next) => {
  req.controller = new KioskController();
  next();
});

app.get('/', (req, res) => {
  req.controller.getRoot(req, res);
});

app.post('/', auth.isLoggedIn, (req, res) => {
  req.controller.postRoot(req, res);
});

app.get('/enable', auth.isLoggedIn, (req, res) => {
  req.controller.getEnable(req, res);
});

app.post('/enable', auth.isLoggedIn, (req, res) => {
  req.controller.postEnable(req, res);
});

module.exports = config => app;
