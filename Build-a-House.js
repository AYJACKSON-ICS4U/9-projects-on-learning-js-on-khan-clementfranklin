 var drawW = function(Xpos,Ypos,Wwidth,Hhieght){
    rect(Xpos,Ypos,Wwidth,Hhieght);
};

draw = function() {
     
background(219, 255, 255);

fill(174, 180, 214);
triangle(200, 28, 350, 150, 50, 150);

fill(255, 255, 255);
rect(60, 150, 280, 207);

fill(94, 155, 191);


var x = 0;
for (var y = 80; y < 310; y += 30) {
    drawW(y,170,20,170);
}
fill(150, 93, 150);

rect(180, 280, 40, 77);
while(x < 400){

image(getImage("cute/GrassBlock"),x, 330, 40, 80);
x = x+40;
    
}

};


