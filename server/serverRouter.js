var express = require('express');
var router = express.Router();
var User = require('./controller/adminLoginController/adminLoginController');
var RegisterTeam = require('./controller/registerController/registerTeamController');
/* GET home page. */
router.post('/authenticate', function (req, res, next) {
  console.log(req.body.username);
  User.authenticate(req.body.username, req.body.password, function (error, user) {
    console.log(error);
    if (error || !user) {
      var err = new Error('invalid login');
      err.status = 401;
      return next(err);
    } else {
      let user1 = {
        id: "1",
        username: "shankarp1",
        password: "helloo",
        firstName: user.admin_id,
        lastName: "Parimi"
      }
      //req.session.userId = user._id;
      let body = {
        user: user1
      };
      res.send({status: 200, body: body});
    }
  });


});

router.post('/addTeamManager', function (req, res, next) {
  console.log(req.body);
  RegisterTeam.registerTeam(req.body.team, function (error, message) {
    if (error || !message) {
      var err = new Error('Unable to Register User');
      err.status = 401;
      return next(err);
    } else {
      let body = {
        message: message
      }
      res.send({status: 200, body: body})
    }
  });

});

module.exports = router;
