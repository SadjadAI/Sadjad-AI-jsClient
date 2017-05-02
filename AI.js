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
     console.log(" " + emoji.get('chart_with_upwards_trend') + " Turns : " + turn);
     console.log(" " + emoji.get('fire') + " score : " + score);
     var rand1 = Model.random(0,9);
     var rand2 = Model.random(0,9);
     Model.board(map,rand1,rand2);
     return [rand1,rand2];
   }
}
module.exports = new AI();
