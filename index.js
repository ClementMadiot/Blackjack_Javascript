let firstCard = 11
let secondCard = 10
let sum = firstCard + secondCard
let blackjack = false
let isAlive = true
let message = ''

function startGame() {
  if (sum <= 20) {
    message = 'Do you want an other card ? 🧐'
  } else if (sum === 21) {
    message = 'Wohoo ! You have a blackjack ! 🥳'
    blackjack = true
  } else {
    message = 'you are out of the game ! 😔'
    isAlive = false
  }
  console.log(message)
}
