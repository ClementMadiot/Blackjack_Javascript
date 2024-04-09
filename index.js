const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')

let firstCard = 11
let secondCard = 7
let sum = firstCard + secondCard

let blackjack = false
let isAlive = true
let message = ''

function startGame(){
  renderGame();
}
function renderGame() {
  if (sum <= 20) {
    messageEl.textContent = 'Do you want an other card ?'
    cardEl.textContent = 'Cards : ' + firstCard + ' + ' + secondCard
    sumEl.textContent = 'Sum: ' + sum
  } else if (sum === 21) {
    messageEl.textContent = "Congralutation ! You've a blackjack !"
    cardEl.textContent = 'Cards : ' + firstCard + ' + ' + secondCard
    sumEl.textContent = 'Sum: ' + sum
    blackjack = true
  } else {
    messageEl.textContent = "You're out of the game !"
    cardEl.textContent = 'Cards : ' + firstCard + ' + ' + secondCard
    sumEl.textContent = 'Sum: ' + sum
    isAlive = false
  }
  console.log(messageEl.textContent)
}

function newCard() {
  console.log('Drawing a new card from the deck')
  let card = 3
  sum += card

  renderGame()
}
