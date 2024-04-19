// input element
const inputEl = document.getElementById('inputEl')
const inputBtn = document.getElementById('inputBtn')
const tabBtn = document.getElementById('tabBtn')
// list Element
const ulEl = document.getElementById('ulEl')
//Storage Array
let myLeads = []
let leadFromLocalStorage = JSON.parse(localStorage.getItem('myLeads', myLeads))

if (leadFromLocalStorage) {
  myLeads = leadFromLocalStorage
  render(myLeads)
}

tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
  })
})

function render(leads) {
  let listItem = ''
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li>  
    <a href='${leads[i]}' target='_blank'>${leads[i]} </a>
    </li> `
  }
  ulEl.innerHTML = listItem
}
///Evenement onClick
inputBtn.addEventListener('click', function () {
  let inputValue = inputEl.value
  if (inputValue) {
    myLeads.push(inputValue)
    inputValue = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
  }
})

deleteBtn.addEventListener('click', function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
