const mongoose =  require('mongoose');
var Team =  mongoose.model('TeamManager');
var ethController = require('../ethereumController/ethController');
// Adds teams manager to MongoDB and Creates an Account in EThereum
module.exports.addTeamManager = function (team, callback) {
  console.log("hey!!!!!!!!!\n\\" +team);
  var teamManager = new Team(team);
  teamManager.bcAddress = ethController.addAccount("Hey").address;
  console.log(teamManager);
  teamManager.save()
    .then(function (teamMngr) {
      console.log("I am In"+ teamMngr);
      if(teamMngr) {
        console.log(teamMngr);
        return callback(teamMngr);
      }
    })
    .catch(err => {
      console.log(err);
      return callback(err);
    })
}
