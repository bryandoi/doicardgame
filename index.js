


var randomNumber = Math.floor(Math.random() * 13) + 1; // 1-13

var randomDiceImage = "images/card" + randomNumber + ".png"; // images/card1 - card13.png

document.querySelector(".img1").setAttribute("src", randomDiceImage);

if (randomNumber === 13) {
    document.querySelector("p").innerHTML = "You are a KING";
} else {

}

function refreshPage() { 
    location.reload();
}