const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var adminLoginSchema = new mongoose.Schema({
    admin_id: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    }
  },
  {
    collection: 'login'
  }
);
/*module.exports.validateLogin = function(username, password, callback) {
  console.log(username)
  adminLoginSchema.findOne({admin_id: username}, function(err, user){
    console.log(user);
  })
};*/
adminLoginSchema.statics.authenticate = function (username, password, callback) {
  console.log(username)
  Admin.findOne({admin_id: username})
    .exec(function (err, user) {
      if (err) {
        return callback(err, user)
      } else if (!user) {
        var err = new Error('User not found.');
        err.status = 401;
        return callback(err, user);
      }
      if (password == user.password) {
        return callback(err, user);
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

var Admin = mongoose.model('login', adminLoginSchema);
module.exports = Admin;


