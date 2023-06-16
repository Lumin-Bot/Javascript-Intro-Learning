
let cards = []
let sum = 0
let winner = false
let isAlive = false
let message = ""

let messageText = document.getElementById("message")
let sumText = document.getElementById("sum")
let cardText = document.getElementById("cards")

let player = {
    name: "Guest",
    money: 150
}


let playerText = document.getElementById("player")
playerText.textContent = player.name + ": $" + player.money 

function startGame(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    isAlive = true
    renderGame()
}

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if(randomCard === 1){
        return 11
    } else if(randomCard > 10){
        return 10
    } else{
        return randomCard
    }
}

function renderGame(){    

    cardText.textContent = "Cards: "

    for(let i = 0; i < cards.length; i++){
        cardText.textContent += cards[i] + " "
    }

    sumText.textContent = "Sum: " + sum

    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You've got Blackjack!"
        winner = true
    } else{
        message = "You're out of the game!"
        isAlive = false
    }
    messageText.textContent = message


}

function newCard(){

    if(winner === false && isAlive === true){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

console.log(winner)
console.log(message)

