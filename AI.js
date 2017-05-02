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
     // your turns number :
     console.log(" " + emoji.get('chart_with_upwards_trend') + " Turns : " + turn);
     // your score number :
     console.log(" " + emoji.get('fire') + " Score : " + score);
     var rand1 = Model.random(0,9);
     var rand2 = Model.random(0,9);
     // you get info about your touch in this function :
     Model.board(map,rand1,rand2);
     return [rand1,rand2];
   }
}
module.exports = new AI();
