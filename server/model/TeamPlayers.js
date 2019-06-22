const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var registerTeamPlayersSchema = new mongoose.Schema({
    player_name: {
      type: String,
      required: true
    },
    player_level: {
      type: String,
      required: true,
    },
    player_id: {
      type: Number,
      required: true
    },
    player_team: {
      type: String,
      required: false,
    },
  },
  {
    collection: 'teamPlayers'
  }
);



mongoose.model('TeamPlayers', registerTeamPlayersSchema);
