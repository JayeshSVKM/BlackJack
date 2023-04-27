let player = {
    name:"Unkown",
    chips:150
}
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let sum = 0;
let cards = [];
let hasBlackjack = false;  
let isAlive = false;
let message = "";

let meessageEl =document.getElementById("message-el");

let playerEl = document.getElementById("player-el");

let sumEl = document.querySelector("#sum-el");

let cardsEl = document.getElementById("cards-el")


playerEl.textContent = player.name + ":  $" + player.chips;


function getRandomCard(){

    let randomNumber = Math.floor(Math.random() * 13) +1;

    if(randomNumber > 10){
        return randomNumber ;
    }
    else if(randomNumber === 1){
        return 11;
    }else{
        return 10;
    }
}


function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){

cardsEl.textContent = "Cards: ";


    for(let i = 0;i < cards.length;i++){
      cardsEl.textContent += cards[i] + " ";
   }


    sumEl.textContent = "Sum: " + sum;
    if(sum < 21){
        message = "Do you want to draw a another card!🤔";    
        
     } else if(sum === 21) {
         message = "Wohoo!... You got a blackjack🥳";    
         hasBlackjack = true;
     } else if(sum > 21) {
         message ="You out of game😭";
         isAlive = false;
     }
   
     meessageEl.textContent = message
}
function newCard(){
   // console.log("Drawing the new card from the deck!")

   if( isAlive === true && hasBlackjack === false)
   {

    let card = getRandomCard();

    sum+=card;

     cards.push(card);
     renderGame();

    }
}



