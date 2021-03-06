var hr ,mn,sc

function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);
  angleMode(DEGREES)
}

function draw() {
  background(0,0,0);
  translate(200,200) 
  rotate(-90) 
  hr = hour()
  mn = minute()
  sc = second()
   hrAngle = map(hr,0,60,0,360)
   mnAngle = map(mn,0,60,0,360)
   scAngle = map(sc,0,60,0,360)

  //drawSprites();

  
  push()
  rotate(hrAngle)
  stroke(0,0,255)
  strokeWeight(7)
  line(0,0,50,0)
  pop()

  push()
  rotate(mnAngle)
  stroke(0,255,0)
  strokeWeight(7)
  line(0,0,75,0)
  pop()

  push()
  rotate(scAngle)
  stroke(255,0,0)
  strokeWeight(7)
  line(0,0,100,0)
  pop()

  strokeWeight(10)
  noFill()
  //Hour 
  stroke(0,0,255);
 
  arc(0,0,260,260,0,hrAngle);
  //min 
  stroke(0,255,0); 
  arc(0,0,280,280,0,mnAngle);
  //sec 
  stroke(255,0,0); 
  arc(0,0,300,300,0,scAngle);
}