<!DOCTYPE html>
<html>
 <head>
  <meta charset="utf-8" />
  <title>Cat Walk</title>
 </head>
 <body>
  
  <button id="start-button">Start</button>
  <button id="speed-button">Go Faster!</button>
  <button id="stop-button">Stop</button>
  <div id="info"></div>
  
  <img style="position:absolute; left: 0px; top: 80px;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">

  <script>
var movePixels = 10;
var delayMs = 50;
var catTimer = null;
function catWalk() {
  var img = document.getElementsByTagName('img')[0];
  var currentLeft = parseInt(img.style.left);
  img.style.left = (currentLeft + movePixels) + 'px';
  if (currentLeft > (window.innerWidth-img.width)) {
    img.style.left = '0px';
  }
}
function startCatWalk() {
  catTimer = window.setInterval(catWalk, delayMs);
}
  </script>

 </body>
</html>


function onStartClick() {
    startCatWalk();
function onStopClick() {
   window.clearInterval(catTimer);
}
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick);
function onSpeedClick() {
    movePixels += 5;
    var speed = movePixels * (1000/50);
    document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px/second';
}
var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);

function onStartClick() {
    startCatWalk();
    startButton.setAttribute("disabled", "disabled");
    stopButton.removeAttribute("disabled");
    speedButton.removeAttribute("disabled");
}
var startButton = document.getElementById('start-button');
startButton.addEventListener('click', onStartClick);

function onStopClick() {
   window.clearInterval(catTimer);
   stopButton.setAttribute("disabled", "disabled");  
   speedButton.setAttribute("disabled", "disabled");  
   startButton.removeAttribute("disabled");
}
var stopButton = document.getElementById('stop-button');
stopButton.addEventListener('click', onStopClick);
stopButton.setAttribute("disabled", "disabled");

function onSpeedClick() {
    movePixels += 5;
    var speed = movePixels * (1000/50);
    document.getElementById('info').innerHTML = 'Current speed: ' + speed + 'px/second';
}
var speedButton = document.getElementById('speed-button');
speedButton.addEventListener('click', onSpeedClick);
speedButton.setAttribute("disabled", "disabled");


