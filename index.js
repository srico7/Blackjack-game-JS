
let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageA = document.getElementById("message-a");
let sumE = document.getElementById("sum-e");
let cardsE = document.getElementById("cards-e");

let bPlayer = {
    name: "Srico",
    chips: 140
}

let playerB = document.getElementById("b-player");
playerB.textContent = bPlayer.name + ": $" + bPlayer.chips;

function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    
    gameOut()
}

function getRandomCard(){
    let rCard = Math.floor(Math.random() * 13) + 1;
    if (rCard > 10){
        return 10;
    }
    else if (rCard === 1){
        return 11;
    }
    else {
        return rCard
    }
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
    cardsE.textContent = "Cards: " ;

    for (let i = 0; i < cards.length; i++){
        cardsE.textContent += cards[i] + " "; 

    }
     
}

function newCard(){
    if (isAlive === true && hasBlackJack === false){

    let card = getRandomCard();
    sum += card;

    cards.push(card);
    gameOut();
}

}
