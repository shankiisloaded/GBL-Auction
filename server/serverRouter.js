var express = require('express');
var router = express.Router();
var authEngine = require('./controller/adminLoginController/adminLoginController');
var RegisterTeam = require('./controller/registerController/registerBanks');
var RegisterPlayer = require('./controller/registerController/registerUsers');
var ethController = require('./controller/ethereumController/ethController');

/* GET home page. */
router.post('/authenticate', function (req, res, next) {
  console.log(req.body.username);
  authEngine.authenticate(req.body.username, req.body.password, function (error, user, account) {
    console.log(error);
    if (error || !user) {
      var err = new Error('invalid login');
      err.status = 401;
      return next(err);
    } else {
      let user1 = {
        id: "1",
        username: "shankar",
        password: "helloo",
        firstName: user.login_id,
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
  RegisterTeam.addTeamManager(req.body, function (err, teamMngr) {

  let body = {};
    res.send({status: 200, body: body});
  })

});

router.post('/addTeamPlayer', function(req, res, next) {
  console.log(req.body);
})



module.exports = router;
