//// load config file
const config = require('./config.json');
const AI = require('./AI.js');
const AI = require('./Model.js');
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
   socket.emit('touch', config.TOKEN, random(0,9), random(0,9));
   console.log(data);
 });

  //  socket.on('result', function(data{}) {
  //   console.log(' => [result]');
  //  });
});

socket.on('reconnected', function() {
    console.log(' => [Reconnected]');
});
socket.on('disconnect', function() {
    console.log(' => [disconnect]');
});

// // server events
// // socket.on('connect', function() {
// //     console.log(' [connected] ');
// //     // console.log(socket.connect());

// //
// //     socket.emit('touch',TOKEN,random(0,9),random(0,9), function() {
// //       console.log(' [touch] ');
// //       socket.on('result',function(data) {
// //         console.log(data['score']);
// //         console.log(data['trun_number']);
// //         console.log(data['data']);
// //       })
// //     });
// // });
//

// socket.emit('init',TOKEN , function (){
//     console.log(' => [inited] ');
//     socket.on('result',function(map) {
//       // console.log(data['trun_number']);
//       console.log(data['data'].toJSON());
//     });
// });
//
// // socket.on('result',function(data) {
// //   // console.log(data['trun_number']);
// //   console.log(data['data'].toJSON());
// // })

// socket.on('reconnected', function() {
//     console.log(' => [Reconnected]');
// });
//
