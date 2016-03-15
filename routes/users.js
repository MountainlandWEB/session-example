var express = require('express');
var basicAuth = require("basic-auth");
var router = express.Router();

router.use(function (req, res, next){
  var user = basicAuth(req);

  if (!user || user.name !== "chris" || user.pass !== "password") {
    res.set("WWW-Authenticate", "Basic realm=Please enter your creds");
    return res.send(401);
  }

  req.session.user = user;
  next();
});

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Welcome, ' + req.session.user.name);
});

router.post("/tweet", function(req, res, next){
  req.session.tweets[req.session.user.name].push()
});

module.exports = router;
