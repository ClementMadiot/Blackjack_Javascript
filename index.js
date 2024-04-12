///Element
const messageEl = document.getElementById('message-el')
const sumEl = document.getElementById('sum-el')
const cardEl = document.getElementById('card-el')
const playerEl = document.getElementById('player-el')
const casinoCardEl = document.getElementById('casinoCard-el')
const casinoSumEl = document.getElementById('casinoSum-el')
///Cards
let cards = []
let casinoCards = []
let sum = 0
let casinoSum = 0
///Rules
let blackjack = false
let isAlive = false
let message = ''
///Object
let player = {
  name: 'Score :',
  chips: 0,
}
playerEl.textContent = player.name + ' $' + player.chips

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

  let casinoCard1 = getRandomCard()
  let casinoCard2 = getRandomCard()
  casinoCards = [casinoCard1, casinoCard2]
  casinoSum = casinoCard1 + casinoCard2
  casinoGame()
  renderGame()
}
function casinoGame() {
  //casino hand
  casinoCardEl.textcontent = 'Bank :'
  for (let i = 0; i < casinoCards.length; i++) {
    casinoCardEl.textContent += ' ' + casinoCards[i]
  }
  casinoSumEl.textContent += ' ' + casinoSum
}
/// Display
function renderGame() {
  //player hand
  cardEl.textContent = 'Cards :'
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += ' ' + cards[i]
  }
  sumEl.textContent = 'Sum : ' + sum

  //player condition
  if (sum <= 20) {
    messageEl.textContent = 'Do you want an other card ?'
  } else if (sum === 21) {
    messageEl.textContent = "Congralutation ! You've a blackjack !"
    blackjack = true
    player.chips += 100
    playerEl.textContent = player.name + ' $' + player.chips
  } else {
    messageEl.textContent = "You're out of the game !"
    isAlive = false
    player.chips -= 10
    playerEl.textContent = player.name + ' $' + player.chips
  }
}

function newCard() {
  if (isAlive === true && blackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    let newCasionoCard = getRandomCard()
    casinoSum += newCasionoCard
    casinoCards.push(newCasionoCard)
  }
  renderGame()
}

function result() {
  if (casinoSum === sum) {
    player.chips += 0
  } else if (casinoSum > sum) {
    player.chips -= 10
    playerEl.textContent = player.name + ' $' + player.chips
  } else {
    player.chips += 10
    playerEl.textContent = player.name + ' $' + player.chips
  }
  newGame()
}

function newGame() {
  isAlive = false
  cards = []
  casinoCards = []
  sum = 0
  casinoSum = 0
  sumEl.textContent = 'Sum :'
  cardEl.textContent = 'Cards :'
  casinoSumEl.textContent = 'Sum :'
  casinoCardEl.textContent = 'Bank :'
  messageEl.textContent = 'Want to play again ?'
}
