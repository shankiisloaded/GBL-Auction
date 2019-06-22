const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Admin = mongoose.model('adminDetails');
var EthController = require('../ethereumController/ethController')
/*module.exports.validateLogin = function(username, password, callback) {
  console.log(username)
  adminLoginSchema.findOne({admin_id: username}, function(err, user){
    console.log(user);
  })
};*/
class AuthEngine {
  authenticate(username, password, callback) {
    console.log(username);

    Admin.findOne({login_id: username})
      .exec(function (err, user) {
        if (err) {
          return callback(err, user)
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err, user);
        }
        if (password == user.password) {
          var account = EthController.getAccountDetails(user.account_id);
          var balance = EthController.getAccountBalance(user.account_id);
          return callback(err, user, account);
        } else {
          return callback();
        }
        /*bcrypt.compare(password, user.password, function (err, result) {
          if (result === true) {
            return callback(null, user);
          } else {
            return callback();
          }
        })*/
      });
  }
}

module.exports = new AuthEngine();


