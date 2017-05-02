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
          console.log(" Rocket Cell \n Direction : " + board[i][j]['direction']);
        } else if (board[i][j]['type'] == "glass") {
          // TODO : add direction on non number form in update !
          console.log(" Glass Cell \n Direction : " + board[i][j]['life_time']);
        }
}
}
