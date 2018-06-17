var mongoose = require('mongoose');

var adminUserSchema = new mongoose.Schema({
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

module.exports = adminUserSchema;
