// PONG COURT
var pongCourt = document.getElementById ('canvas');
var context = pongCourt.getContext('2d');
context.fillStyle='purple';
context.fillRect(0, 0, 1000, 1000);

// CENTER DIVIDER
context.fillStyle='#95E3EC';
context.fillRect(365, 0, 12, 400);


// LEFT PONG PADDLE
context.fillStyle='#95E3EC';
context.fillRect(10, 160, 10, 50);

// RIGHT PONG PADDLE
context.fillStyle='#95E3EC';
context.fillRect(730, 185, 10, 50);
