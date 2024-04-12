const saveEl = document.getElementById('save-el')
const countEl = document.getElementById('count-el')
// const resetEl = document.getElementById('reset-el');

// People entered
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
}
function reverse(){
  count -= 1
  countEl.innerText = count
}

// Previous entires
function save() {
  let saveCount = count + ' - '
  saveEl.textContent += saveCount
  console.log(saveEl.innerText)
  reset()
}

// Reset the count
function reset() {
  count = 0
  countEl.innerText = count
}