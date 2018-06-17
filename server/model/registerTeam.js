var mongoose = require('mongoose');

var adminUserSchema = new mongoose.Schema({
  admin_id: String,
  admin_username: String,
  password: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('admin', adminUserSchema);
