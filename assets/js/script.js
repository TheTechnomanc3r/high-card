
/* Generates a random card from the .png images */

var cardArr = ['hearts02.png', 'hearts03.png', 'hearts04.png', 'hearts05.png', 'hearts06.png', 'hearts07.png',
'hearts08.png', 'hearts09.png', 'hearts10.png', 'hearts11.png', 'hearts12.png', 'hearts13.png', 'hearts14.png'];
var cardPath = "assets/images/";

/* Sets focus to button */

window.onload = function() {
    document.getElementById("btn").focus();
}


function rndCard() {

    document.getElementById("btn").focus();
    
    /* Resets the picture */
    
    document.getElementById("playercard").innerHTML="";
    document.getElementById("playercard").style.borderColor = "whitesmoke";

    /* Generates a random Card with an assigned value */

    for (var i = 0; i < 1; i++) {
        var rndp = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rndp;        
        document.getElementById("playercard").appendChild(image);
                 
    }

    document.getElementById("cpucard").innerHTML="";
    document.getElementById("cpucard").style.borderColor = "whitesmoke";

    for (var i = 0; i < 1; i++) {
        var rndc = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rndc;
        document.getElementById("cpucard").appendChild(image);

    }
        /* Compares the value of the cards and selects the winner */

    if (rndp > rndc) {
        
       let pscore = document.getElementById("playerscore").innerText;
       document.getElementById("playerscore").innerText = ++pscore;
       document.getElementById("playercard").style.borderColor = "#00ff00";
       document.getElementById("winner").innerHTML = "Player Wins!"   
        
    } else if (rndp < rndc) {

       let cscore = document.getElementById("cpuscore").innerText;
        document.getElementById("cpuscore").innerText = ++cscore;
        document.getElementById("cpucard").style.borderColor = "#00ff00";
        document.getElementById("winner").innerHTML = "CPU Wins!" 

        /* Checks for a Draw and skips giving points */

    } else if (rndp == rndc) {

        document.getElementById("winner").innerHTML = "Draw";
    }


}






