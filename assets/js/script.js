
/* Generates a random card from the .png images */

var cardArr = ['hearts02.png', 'hearts03.png', 'hearts04.png', 'hearts05.png', 'hearts06.png', 'hearts07.png',
'hearts08.png', 'hearts09.png', 'hearts10.png', 'hearts11.png', 'hearts12.png', 'hearts13.png', 'hearts14.png'];
var cardPath = "assets/images/";

function rndCard() {

    /* Resets the picture */
    
    document.getElementById("playercard").innerHTML="";
    document.getElementById("playercard").style.borderColor = "whitesmoke";

    for (var i = 0; i < 1; i++) {
        var rndp = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rndp;        
        document.getElementById("playercard").appendChild(image);
        console.log(rndp);
          
    }

    document.getElementById("cpucard").innerHTML="";
    document.getElementById("cpucard").style.borderColor = "whitesmoke";

    for (var i = 0; i < 1; i++) {
        var rndc = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rndc;
        document.getElementById("cpucard").appendChild(image);
        console.log(rndc, i);
    }

    if (rndp > rndc) {
        
       let pscore = document.getElementById("playerscore").innerText;
       document.getElementById("playerscore").innerText = ++pscore;
       document.getElementById("playercard").style.borderColor = "#00ff00";   
        
    } else if (rndp < rndc) {

       let cscore = document.getElementById("cpuscore").innerText;
        document.getElementById("cpuscore").innerText = ++cscore;
        document.getElementById("cpucard").style.borderColor = "#00ff00";
    }

}

function playGame() {



    
}




