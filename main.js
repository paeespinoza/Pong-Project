// PONG COURT
var pongCourt = document.getElementById ('canvas');
var context = pongCourt.getContext('2d');
var paddle1 = pongCourt.getContext('2d');
var paddle2 = pongCourt.getContext('2d');
var ball = pongCourt.getContext('2d');

// ----------------------------------------------------------\\
// ----------------------------------------------------------\\


if (pongCourt.getContext) {

  var generic = {
    'fillColor': '#95E3EC',
    'height': 50,
    'width': 10
  };
  var paddle1Stuff ={
    'xInit': 10,
    'y': 180
  };
  var paddle2Stuff ={
    'xInit' : 730
  };


  var ballStuff = {
    'height': 10,
    'width' : 10
  };

  // PONG COURT\\
  var render = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle='purple';
    context.fillRect(0, 0, 1000, 1000);
    requestAnimationFrame(render);


    // CENTER DIVIDER\\
    context.fillStyle = generic.fillColor;
    context.fillRect(365, 0, 12, 400);
    // PADDLE ONE\\
    paddle1.beginPath();
    paddle1.rect(paddle1Stuff.xInit, paddle1Stuff.y, generic.width, generic.height);
    paddle1.fillStyle = generic.fillColor;
    paddle1.fill();
    // PADDLE TWO\\
    paddle2.beginPath();
    paddle2.rect(paddle2Stuff.xInit, 185, generic.width, generic.height);
    paddle2.fillStyle = generic.fillColor;
    paddle2.fill();
    // PONG BALL
    ball.beginPath();
    ball.rect(90, 200, ballStuff.height, ballStuff.width);
    ball.fillStyle = generic.fillColor;
    ball.fill();

  };
render();
};
// ANIMATION \\
var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        function(callback) {
          return setTimeout(callback, 1);
        };
var animate = function (prop, val, duration) {

  var start = new Date().getTime();
  var end = start + duration;
  var current = paddle1Stuff[prop];
  var distance = val - current;

  var step = function() {
      var timestamp =new Date().getTime();
      var progress = Math.min((duration - (end -timestamp)) / duration, 1);
      paddle1Stuff[prop] = current + (distance * progress);
      if(progress < 1) requestAnimationFrame(step);

      };
    return step();
}
animate('y', 30, 1000);

// KEY CONTROL for PADDLE1--------------------------------------//
//----------------------------------------------------//
// KEY UP EVENT
document.body.addEventListener('keydown', function(e){
  var info = meta(e);
  if(info) {
    e.preventDefault();
    animate(info[0], paddle1Stuff[info[0]] + info[1], 1000);

  };
});
// KEY DOWN EVENT
document.body.addEventListener('keyup', function(e) {
    var info = meta(e);

    if (info) {
        e.preventDefault();
        animate(info[0], paddle1Stuff[info[0]], 1000);

    };
});
// END KEY CONTROL----------------------------------------\\
//----------------------------------------------------//

var meta = function(e) {
  var distance = 100;
  var prop = 'y';
  var mult = 1;
//
  if(e.which < 37 || e.which > 40) {
      return false;
  }
  if (e.which === 37 || e.which === 38) {
        mult = -1;
    }

  if(e.which === 38 || e.which === 40) {
    prop = 'y';
  }
  return[prop, mult * distance];
};
