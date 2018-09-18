

const express = require('express');
const router = express.Router();
const login = require('./login');
const signin = require('./signin');
const signout = require('./signout');
router.get('/', function(req, res, next){
  res.render('index',{ title: 'Express', content: "sign in", out: "sign out"})
});
router.get('/oversignin', function(req, res, next){
  res.render('oversignin');
});
router.get('/login', login);
router.get('/sign_in', signin);
router.get('/sign_out', signout);
module.exports = router;