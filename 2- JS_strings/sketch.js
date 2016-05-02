function setup() {
  createCanvas(600,600);
}

function draw() {
  fill(0,25);
  rect(0,0,width,height);
  fill(255);
  ellipse(300,300,20,20);
  
  var angle = frameCount*(.1);
  
  var x1 = 300 + (50 * cos(angle));
  var y1 = 300 + (150 * sin(angle));
  
  var x2 = 300 + (150 * cos(angle) * cos(-PI/5) - 150 * sin(angle) * sin(-PI/5));
  var y2 = 300 + (35 * sin(angle) * sin(-PI/5) - 100 * cos(angle) * cos(-PI/5));
  
  var x3 = 300 + (150 * cos(angle) * cos(-PI/5) + 150 * sin(angle) * sin(-PI/5));
  var y3 = 300 + (35 * sin(angle) * sin(-PI/5) + 100 * cos(angle) * cos(-PI/5));
  
  noStroke();
  fill(253,255,149);
  ellipse(x1,y1,10,10);
  fill(253,255,149);
  ellipse(x2,y2,10,10);
  fill(253,255,149);
  ellipse(x3,y3,10,10);

}