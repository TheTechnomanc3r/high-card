
/* Generates a random card from the .png images */

var cardArr = ['heartsa.png','hearts2.png', 'hearts3.png', 'hearts4.png', 'hearts5.png', 'hearts6.png', 
'hearts7.png', 'hearts8.png', 'hearts9.png', 'hearts10.png', 'heartsj.png', 'heartsq.png', 'heartsk.png'];
var cardPath = "assets/images/";

function rndCard() {

        document.getElementById("playercard").innerHTML="";
    for (var i = 0; i < 1; i++) {
        var rnd = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rnd;        
        document.getElementById("playercard").appendChild(image);
        
   
    }

}




