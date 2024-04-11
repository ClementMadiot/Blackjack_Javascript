///Element
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')
///Cards
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard

///Rules
let blackjack = false
let isAlive = true
let message = ''

///Random card

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 11) + 1
  return randomNumber
}

/// Onclick
function startGame() {
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
  console.log('Drawing a new card from the deck')
  let card = getRandomCard()
  sum += card
  cards.push(card)

  renderGame()
}
