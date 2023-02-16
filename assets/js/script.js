
/* Generates a random card from the .png images */

var cardTest = ['heartsj.png', 'heartsq.png', 'heartsk.png','heartsa.png'];
var cardArr = ['heartsa.png','hearts2.png', 'hearts3.png', 'hearts4.png', 'hearts5.png', 'hearts6.png', 
'hearts7.png', 'hearts8.png', 'hearts9.png', 'hearts10.png', 'heartsj.png', 'heartsq.png', 'heartsk.png'];
var cardPath = "assets/images/";

function rndCard() {

    /* Resets the picture */
    
    document.getElementById("playercard").innerHTML="";

    for (var i = 0; i < 1; i++) {
        var rndp = cardTest[Math.floor(Math.random() * cardTest.length)];
        var image = new Image();
        image.src = cardPath+rndp;        
        document.getElementById("playercard").appendChild(image);
        console.log(rndp);
          
    }

    document.getElementById("cpucard").innerHTML="";

    for (var i = 0; i < 1; i++) {
        var rndc = cardTest[Math.floor(Math.random() * cardTest.length)];
        var image = new Image();
        image.src = cardPath+rndc;
        document.getElementById("cpucard").appendChild(image);
        console.log(rndc, i);
    }

    /*if (rndp == rndc) {

        ++pscore;

    }*/


    if (rndp > rndc) {
        
       let pscore = document.getElementById("playerscore").innerText;
       document.getElementById("playerscore").innerText = ++pscore;
       document.getElementById("playercard").style.borderColor = "darkorange";
        
    } else if (rndp < rndc) {

       let cscore = document.getElementById("cpuscore").innerText;
        document.getElementById("cpuscore").innerText = ++cscore;
        document.getElementById("cpucard").style.borderColor = "darkorange";
    }

}

function playGame() {



    
}




