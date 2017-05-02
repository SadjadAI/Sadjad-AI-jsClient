var emoji = require('node-emoji');
module.exports = {
  random: function (min,max) {
      return (Math.floor(Math.random() * (max - min + 1)) + min);
  },
  board:  function (map,i,j) {
        var board = JSON.parse(map);
        console.log(" " + emoji.get('information_source') + " Your selected Cell have this info : ");
        if (board[i][j]['type'] == "blue") {
           console.log(" Blue bird");
        } else if (board[i][j]['type'] == "red") {
           console.log(" red bird");
        } else if (board[i][j]['type'] == "yellow") {
           console.log(" yellow bird");
        } else if (board[i][j]['type'] == "black") {
           console.log(" black bird");
        } else if (board[i][j]['type'] == "green") {
          console.log(" green bird");
        } else if (board[i][j]['type'] == "empty") {
          console.log(" Empty Cell !");
        } else if (board[i][j]['type'] == "empty") {
          console.log(" Empty Cell !");
        } else if (board[i][j]['type'] == "rock") {
          console.log(" Rock Cell \n life_time : " + board[i][j]['life_time']);
        } else if (board[i][j]['type'] == "rocket") {
          // TODO : add direction on non number form in update !
          if(board[i][j]['direction'] == 0)
            console.log(" Rocket Cell \n Direction : Vertical");
          else
            console.log(" Rocket Cell \n Direction : Horizontal");
        } else if (board[i][j]['type'] == "glass") {
          console.log(" Glass Cell \n life_time : " + board[i][j]['life_time']);
        } else if (board[i][j]['type'] == "bomb") {
          console.log(" Bomb Cell \n life_time : " + board[i][j]['life_time']);
        } else if (board[i][j]['type'] == "wood") {
          console.log(" Wood Cell \n life_time : " + board[i][j]['life_time']);
        } else if (board[i][j]['type'] == "laser") {
          console.log(" Laser Cell ");
        }
   },
   info: function(turn,score){
     // your turns number :
     console.log(" " + emoji.get('chart_with_upwards_trend') + " Turns : " + turn);
     // your score number :
     console.log(" " + emoji.get('fire') + " Score : " + score);
   }
}
