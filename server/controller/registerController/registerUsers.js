const mongoose =  require('mongoose');
var TeamPlayer =  mongoose.model('TeamPlayers');
module.exports.addTeamPlayer = function (teamPlayer, callback) {
  var teamPlayer = new TeamPlayer(teamPlayer);
  teamPlayer.pre("save", function(next){
    if(!this.trail) {
      console.log("logged");
    }
  });

  /*teamPlayer.save()
    .then(function (teamPlyr) {
      if(teamPlyr) {
        console.log(teamPlyr);
        return callback(teamPlyr);
      }
    })
    .catch(err => {
      return callback(err);
    })*/
}
