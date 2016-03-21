// PONG COURT
var pongCourt = document.getElementById ('canvas');
var context = pongCourt.getContext('2d');
var paddle1 = pongCourt.getContext('2d');
var paddle2 = pongCourt.getContext('2d');
var ball = pongCourt.getContext('2d');

// ----------------------------------------------------------\\
// ----------------------------------------------------------\\

// LEFT PONG PADDLE
if (pongCourt.getContext) {

  var generic = {
    'fillColor': '#95E3EC',
    'height': 50,
    'width': 10
  };
  var paddle1Stuff ={
    'xInit': 10
  };
  var paddle2Stuff ={
    'xInit' : 730
  };


  var ballStuff = {
    'height': 10,
    'width' : 10
  };


  var render = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle='purple';
    context.fillRect(0, 0, 1000, 1000);

    // CENTER DIVIDER
    context.fillStyle = generic.fillColor;
    context.fillRect(365, 0, 12, 400);

    paddle1.beginPath();
    paddle1.rect(paddle1Stuff.xInit, 180, generic.width, generic.height);
    paddle1.fillStyle = generic.fillColor;
    paddle1.fill();

    paddle2.beginPath();
    paddle2.rect(paddle2Stuff.xInit, 185, generic.width, generic.height);
    paddle2.fillStyle = generic.fillColor;
    paddle2.fill();

    ball.beginPath();
    ball.rect(90, 200, ballStuff.height, ballStuff.width);
    ball.fillStyle = generic.fillColor;
    ball.fill();

  };
render();
};
