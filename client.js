//// load config and class file
const config = require('./config.json');
const AI = require('./AI.js');
// const Cell = require('./Model.js');
const socket = require('socket.io-client')(config.HOST);
console.log('game starting...');
/// server functions here
socket.on('connect', function() {
    console.log(' => [connected]');
    socket.emit('init', config.TOKEN , function (){
      // console.log(' => [inited] ');
});

socket.on('result', function(data) {
   var result = AI.turn(data['data'].toString(),data['turn_number'],data['score']);
   socket.emit('touch', config.TOKEN, result[0], result[1]);
 });
});

socket.on('reconnected', function() {
    console.log(' => [Reconnected]');
});
socket.on('disconnect', function() {
    console.log(' => [disconnect]');
});

// arr = []
// for (var i = 0; i < 10; ++i) {
//   arr.push({
//     name: 'reza',
//     family: 'nazeri'
//   })
// }
// console.log(arr)
// } jsObject
