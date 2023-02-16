
/* Generates a random card from the .png images */

var cardArr = ['heartsa.png','hearts2.png', 'hearts3.png', 'hearts4.png', 'hearts5.png', 'hearts6.png', 
'hearts7.png', 'hearts8.png', 'hearts9.png', 'hearts10.png', 'heartsj.png', 'heartsq.png', 'heartsk.png'];
var cardPath = "assets/images/";

function rndCard() {

    /* Resets the picture */
    
    document.getElementById("playercard").innerHTML=""

    for (var i = 0; i < 1; i++) {
        var rndp = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rndp;        
        document.getElementById("playercard").appendChild(image);
        console.log(rndp);
        
        
   
    }

    document.getElementById("cpucard").innerHTML="";

    for (var i = 0; i < 1; i++) {
        var rndc = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rndc;
        document.getElementById("cpucard").appendChild(image);
        console.log(rndc, i);
    }

    if (rndp > rndc) {
        
        document.getElementById("playerscore").innerHTML="Player WON!";
        
    } else if (rndp < rndc) {

        document.getElementById("cpuscore").innerHTML="CPU WON!";
    }

}

function playGame() {



    
}




