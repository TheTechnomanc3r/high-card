

function randomCard() {

var cards = [];

cards[0] = "assets/images/heartsa.png";
cards[1] = "assets/images/hearts2.png";
cards[2] = "assets/images/hearts3.png";
cards[3] = "assets/images/hearts4.png";
cards[4] = "assets/images/hearts5.png";
cards[5] = "assets/images/hearts6.png";
cards[6] = "assets/images/hearts7.png";
cards[7] = "assets/images/hearts8.png";
cards[8] = "assets/images/hearts9.png";
cards[9] = "assets/images/hearts10.png";
cards[10] = "assets/images/heartsj.png";
cards[11] = "assets/images/heartsq.png";
cards[12] = "assets/images/heartsk.png";


var number = Math.floor(Math.random() * cards.length);

return document.getElementsByClassName("playercard").innerHTML = '<img src="'+cards[number]+'" />';  


}


var cardArr = ['heartsa.png','hearts2.png', 'hearts3.png', 'hearts4.png', 'hearts5.png', 'hearts6.png', 
'hearts7.png', 'hearts8.png', 'hearts9.png', 'hearts10.png', 'heartsj.png', 'heartsq.png', 'heartsk.png'];
var cardPath = "assets/images/";

function rndCard() {

    for (var i = 0; i < 1; i++) {
        var rnd = cardArr[Math.floor(Math.random() * cardArr.length)];
        var image = new Image();
        image.src = cardPath+rnd;
        document.body.appendChild(image);
    }

}




