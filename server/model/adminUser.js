var mongoose = require('mongoose');

var adminUserSchema = new mongoose.Schema({
    login_id: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    },
    account_id: {
      type: String
    }
  },
  {
    collection: 'login'
  }
);
module.exports = adminUserSchema;
mongoose.model('adminDetails', adminUserSchema);
