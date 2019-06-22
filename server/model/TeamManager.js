const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var registerTeamSchema = new mongoose.Schema({
    team_name: {
      type: String,
      required: true
    },
    team_manager: {
      type: String,
      required: true,
    },
    gateway: {
      type: String,
      required: true
    },
    bcAddress: {
      type: String,
      required: true,
      unique: true
    },
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    collection: 'teamManager'
  }
);



mongoose.model('TeamManager', registerTeamSchema);


