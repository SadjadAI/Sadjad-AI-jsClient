//// load config file
const config = require('./config.json');
const HOST = config.HOST;
const PORT = config.PORT;
const TOKEN = config.TOKEN;
const socket = require('socket.io-client')(HOST + ':' + PORT);
console.log('game starting...');

// server events
socket.on('connect', function() {
    console.log(' [connect] ');

    socket.emit('init',TOKEN , function (){
      console.log(' [init] ');
    });

    socket.on('result',function(data) {
      console.log(data);
      socket.emit('touch',TOKEN,random(0,9),random(0,9), function() {
        console.log(' [touch] ');
      })
    });
});


socket.on('disconnect', function() {
    console.log(' => [disconnect]');
});

function random(min,max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min);
}
