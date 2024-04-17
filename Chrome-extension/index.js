// input element
const inputEl = document.getElementById('inputEl')
const inputBtn = document.getElementById('inputBtn')
// list Element
const ulEl = document.getElementById('ulEl')
let myLeads = []

let leadFromLocalStorage = JSON.parse(localStorage.getItem('myLeads', myLeads))

if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage
  renderLeads()
} else {
  console.log('storage is empty')
}

///Evenement onClick
inputBtn.addEventListener('click', (e) => {
  let inputValue = inputEl.value
  if (inputValue) {
    myLeads.push(inputValue)
    inputValue = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLeads()
  }
})

deleteBtn.addEventListener('click', () => {
  myLeads = localStorage.clear()
  myLeads = []
  ulEl.innerHTML = ``
})


function renderLeads() {
  let listItem = ''
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `<li> 
    <a href='${myLeads[i]}' target='_blank'>${myLeads[i]} </a>
    </li> `
    // console.log(listItem)
  }
  ulEl.innerHTML = listItem
}

