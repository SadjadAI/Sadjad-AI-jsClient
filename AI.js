class AI {
   turn(map,turn,score){
     function random(min,max) {
         return (Math.floor(Math.random() * (max - min + 1)) + min);
     }
     console.log(" New Turn Started >>");
     console.log(map);
     console.log(turn);
     console.log(score);
     console.log(" Turn Ended >>");
     return [random(0,9),random(0,9)];
   }
}
module.exports = new AI();
