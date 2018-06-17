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
    collection: 'teams'
  }
);

registerTeamSchema.methods.registerTeam = function (team) {

};

var RegisterTeam = mongoose.model('teams', registerTeamSchema);

module.exports = RegisterTeam;
