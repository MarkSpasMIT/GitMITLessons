//Set global variable that would contain the position, velocity and the html element "ball"
var ball = document.getElementById('ball');
var velocity = 50;
var positionX = 100; 
var positionY = 100;
var reverse = true;
//write a function that can change the position of the html element "ball"
function moveBall() {
  // two fixed x-axis coordinates (you will use these variable in step 3)
  var Xmin = 100;
  var Xmax = 400;
  var Ymin = 100;
  var Ymax = 300;
  if (reverse) {
    positionX = positionX + velocity;
    positionY = positionY + velocity;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
  }
  else {
    positionX = positionX - velocity;
    positionY = positionY - velocity;
    ball.style.left = positionX + 'px';
    ball.style.top = positionY + 'px';
  }
  if (positionX > Xmax || positionY > Ymax) {
    ball.style.width = "50px";
    ball.style.height = "150px";
    ball.style.backgroundColor = "green";
    reverse = !reverse;
  } else if (positionX < Xmin || positionY < Ymin) {
    ball.style.width = "250px";
    ball.style.height = "25px";
    ball.style.backgroundColor = "blue";
    reverse = !reverse;
   }
}

// This call the moveBall function every 100ms
setInterval(moveBall, 100);
