let firstCard = 11;
let secondCard = 6;
let Cards = [firstCard, secondCard]
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageA = document.getElementById("message-a");
let sumE = document.getElementById("sum-e");
let cardsE = document.getElementById("cards-e");

function startGame(){
    gameOut()
}

function gameOut(){
    if (sum <= 20){
        message = "DO you want to draw a new card?";
    } else if (sum === 21){
        message = "Woohoo! You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game";
        isAlive = false;
    }
    messageA.textContent = message;
    sumE.textContent = "Sum: " + sum;
    cardsE.textContent = "Cards: " + Cards[0] + ", " + Cards[1];
}

function newCard(){
    console.log("new card");

    let card = 7;
    sum += card;
    gameOut();
}
