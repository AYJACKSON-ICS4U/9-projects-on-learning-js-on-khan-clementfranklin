var xPositions = [50];
var yPositions = [0];

var r= random(1,20);
var r2= random(1,20);

var Rain=[r][r2];

draw = function() {
    
    r = random(8,20);
    var s = second();
    s=r+s;
    background(204, 247, 255);

    mouseClicked = function() {
        background(50, 97, 105);
};
    

    for (var i = 0; i < xPositions.length; i++) {
        
        noStroke();
        
        fill(0, 200, 255);
        if(s < 2){
           s = s+3;
        }
        ellipse(xPositions[i]+s*2, yPositions[i], 10, 10);
        ellipse(xPositions[i]+s*4, yPositions[i], 10, 10);
        ellipse(xPositions[i]+s*6, yPositions[i], 10, 10);
        ellipse(xPositions[i]+s*8, yPositions[i], 10, 10);
        ellipse(xPositions[i]+s*4, yPositions[i], 10, 10);
        ellipse(xPositions[i]+s+20*6, yPositions[i], 10, 10);
        ellipse(xPositions[i]+s+20*7, yPositions[i], 10, 10);
        ellipse(xPositions[i]+s+20*10, yPositions[i], 10, 10);

        yPositions[i] += 20;
        
        if(yPositions[i]>500){
            
        yPositions[i]=0;
            
        }
    }
    
};
