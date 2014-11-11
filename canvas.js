var canvas = document.getElementById('drawCanvas');
var context = canvas.getContext('2d');

canvas.addEventListener('mousedown', startDraw, false);
canvas.addEventListener('mousemove', draw, false);
canvas.addEventListener('mouseup', endDraw, false);

// create a flag
var isActive = false;
 
// array to collect coordinates
var plots = [];
 
function drawOnCanvas(color, plots) {
  context.beginPath();
  context.moveTo(plots[0].x, plots[0].y);
   
  for(var i=1; i<plots.length; i++) {
    context.lineTo(plots[i].x, plots[i].y);
  }

  context.strokeStyle = color;
  context.lineWidth = '10';
  context.stroke();
}

function draw(e) {
  if(!isActive) {
    return false;
  }
   
  // cross-browser canvas coordinates
  var x = e.offsetX || e.layerX - canvas.offsetLeft;
  var y = e.offsetY || e.layerY - canvas.offsetTop;
   
  plots.push({x: x, y: y});
   
  drawOnCanvas("#FFFFFF", plots);
}

function startDraw(e) {
  isActive = true;
}
 
function endDraw(e) {
  isActive = false;
   
  // empty the array
  plots = [];
}

document.addEventListener("DOMContentLoaded", function() {
  document.querySelector("canvas").setAttribute("width", window.innerWidth + "px;");

  var newHeight = window.innerHeight - 70;

  document.querySelector("canvas").setAttribute("height", newHeight + "px;");
  document.querySelector("video").setAttribute("style", "height:" + newHeight + "px;");
});

document.getElementById("reset").addEventListener("click", function() {
  location.reload();
});




