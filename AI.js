///**********************************///
// you should write your AI algorithm here in the turn() function !
///**********************************///
var sleep = require('sleep');
var Model = require('./Model.js');
var emoji = require('node-emoji');

class AI {
  turn(map,turn,score){
     sleep.sleep(1);
     console.log(" ----------------- ");
     var rand1 = Model.random(0,9);
     var rand2 = Model.random(0,9);
     // you get info about your turn and scores in this function :
     Model.info(turn,score);
     // you get info about your touch in this function :
     Model.board(map,rand1,rand2);
     return [rand1,rand2];
   }
}
module.exports = new AI();
