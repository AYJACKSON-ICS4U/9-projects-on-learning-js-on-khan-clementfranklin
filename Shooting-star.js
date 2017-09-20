var xPos = 0;
var yPos = 0;

var yPos2 = 0;
var xPos2 = 400;

draw = function() {
    
    background(29, 40, 115);
    //stars
    fill(247, 243, 210);
    ellipse(20,20,5,5);
    ellipse(190,70,5,5);
    ellipse(80,280,5,5);
    ellipse(80,50,5,5);
    ellipse(220,220,5,5);
    ellipse(320,290,5,5);
    ellipse(20,240,5,5);
    ellipse(110,120,5,5);
    ellipse(100,220,5,5);
    ellipse(350,120,5,5);
    ellipse(350,220,5,5);


    fill(255, 242, 0);
    rect(xPos, yPos, 7, 7);
    
    
    xPos += 1;
    yPos += 1;
    
    fill(255, 242, 0);
    ellipse(xPos2, yPos2, 8, 8);
    
    yPos2 += 1;
    xPos2 -= 1;
    //if the stars go off screen the start at origin 
    if(yPos > 400){
        yPos = 0;
        xPos = 0;
    }
       if(yPos2 > 400){
        yPos2 = 0;
        xPos2 = 400;
    }
    
};
