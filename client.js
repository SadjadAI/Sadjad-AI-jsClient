//// load config file
const config = require('./config.json');
const AI = require('./AI.js');
// const Model = require('./Model.js');
const socket = require('socket.io-client')(config.HOST);
console.log('game starting...');
function random(min,max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}

socket.on('connect', function() {
    console.log(' => [connected]');
    socket.emit('init', config.TOKEN , function (){
      console.log(' => [inited] ');
});

socket.on('result', function(data) {
   var result = AI.turn(data['data'],data['turn_number'],data['score'])
   socket.emit('touch', config.TOKEN, result[0], result[1]);
 });
});

socket.on('reconnected', function() {
    console.log(' => [Reconnected]');
});
socket.on('disconnect', function() {
    console.log(' => [disconnect]');
});
