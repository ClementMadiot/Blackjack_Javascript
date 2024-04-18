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

const tabs = [{ url: 'https://www.google.com/' }]

tabBtn.addEventListener('click', () => {


  let tabValue = tabs[0].url
  myLeads.push(tabValue)
  tabValue = ''
  localStorage.setItem('myLeads', JSON.stringify(myLeads))
  render(myLeads)
})

function render(leads) {
  let listItem = ''
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li> 
    <a href='${leads[i]}' target='_blank'>${leads[i]} </a>
    </li> `
    // console.log(listItem)
  }
  ulEl.innerHTML = listItem
}
///Evenement onClick
inputBtn.addEventListener('click', (e) => {
  let inputValue = inputEl.value
  if (inputValue) {
    myLeads.push(inputValue)
    inputValue = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
  }
})

deleteBtn.addEventListener('click', () => {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
