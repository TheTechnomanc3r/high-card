

function randomCard() {

    /* Card array */

const cards = [];

cards[0] = assets/images/heartsa.png
cards[1] = assets/images/hearts2.png
cards[2] = assets/images/hearts3.png
cards[3] = assets/images/hearts4.png
cards[4] = assets/images/hearts5.png
cards[5] = assets/images/hearts6.png
cards[6] = assets/images/hearts7.png
cards[7] = assets/images/hearts8.png
cards[8] = assets/images/hearts9.png
cards[9] = assets/images/hearts10.png
cards[10] = assets/images/heartsj.png
cards[11] = assets/images/heartsq.png
cards[12] = assets/images/heartsk.png

var number = Math.floor(Math.random() * cards.length);

return document.getElementById("playercard").innerHTML = cards[number];


}






