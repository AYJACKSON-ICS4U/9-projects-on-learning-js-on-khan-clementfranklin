var bodyX = 200;
var bodyY = 220;
var bodyW = 128;
var bodyH = bodyW/2;
var eyeSize = 0;
var Tx = 180;
var Ty = 220;
var Tx2 = 50;
var Ty2 = 240;
var Tx3 = 120;
var Ty3 = 118;
 
draw = function() {
    
    background(49, 194, 196);
    fill(240, 209, 36);
    triangle(Tx,Ty,Tx2,Ty2,Tx3,Ty3);//tail
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    //bubles
    fill(196, 245, 240);
    ellipse(60,114,10,10);
    ellipse(280,110,10,10);
    ellipse(210,70,10,10);

    fill(0, 0, 0);
    
    ellipse(248,210,eyeSize,eyeSize);
    
    if(eyeSize > 0 && eyeSize < 40){
        eyeSize ++;
       
    }else{
        eyeSize = 1;
    }
 
};
