///Element
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')
const playerEl = document.getElementById('player-el');
///Cards
let cards = []
let sum = 0
// console.log(sum)
///Rules
let blackjack = false
let isAlive = false
let message = ''


///Random card

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber === 1) {
    return 11
  } else if (randomNumber > 10) {
    return 10
  }
  return randomNumber
}

/// Onclick
function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  console.log(cards)
  renderGame()
}

/// Display
function renderGame() {
  cardEl.textContent = 'Cards :'
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += ' ' + cards[i]
  }
  sumEl.textContent = 'Sum : ' + sum

  if (sum <= 20) {
    messageEl.textContent = 'Do you want an other card ?'
  } else if (sum === 21) {
    messageEl.textContent = "Congralutation ! You've a blackjack !"
    blackjack = true
  } else {
    messageEl.textContent = "You're out of the game !"
    isAlive = false
  }
  // console.log(message)
}

function newCard() {
  if (isAlive === true && blackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
  }
  renderGame()
  
}

// let hasSolvedChallenge = false
// let hasHintsLeft = true

// if (hasSolvedChallenge === true || hasHintsLeft === true) {
//   showSolution()
// }
// function showSolution() {
//   console.log('showing solution')
// }