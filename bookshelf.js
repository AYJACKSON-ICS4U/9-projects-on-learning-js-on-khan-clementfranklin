var book = [
    {title: "The Book Thief",
    author: "Markus Zusak",
    stars: 3,
    color: color(214, 255, 219)},
    {title: "A Long Walk to Water",
    author: "Linda Sue",
    stars: 3,
    color: color(224, 208, 208)},
   {title: "Of Mice and Men",
   author: "John Steinbeck",
   stars: 4,
   color: color(238, 237, 242)},

];
 
// draw the shelf
fill(173, 117, 33);
rect(0, 120, width, 10);

for( var i = 0; i < book.length; i ++){
// draw one book
    fill(book[i].color);
    rect(10 + i * 100, 20, 90, 100);
    fill(0, 0, 0);
    text(book[i].title, 15 + i *100, 29, 70, 100);
    text(book[i].author, 15 + i *100, 70, 70, 100);
    for (var s = 0; s < book[i].stars; s++) {
    image(getImage("cute/Star"), 11 +s*20 + i* 100, 90, 20, 30);
    }  
}
