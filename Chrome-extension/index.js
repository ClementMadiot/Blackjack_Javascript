// input element
const inputEl = document.getElementById('inputEl')
const inputBtn = document.getElementById('inputBtn')
// list Element
const ulEl = document.getElementById('ulEl')
let myLeads = []

inputBtn.addEventListener('click', (e) => {
  myLeads.push(inputEl.value)
  inputEl.value = ''
  renderLeads()
})

function renderLeads() {
  let listItem = ''
  
  for (let i = 0; i < myLeads.length; i++) {
    listItem += `<li> 
    <a href='${myLeads[i]}' target='_blank'>${myLeads[i]} </a>
    </li> `
    console.log(listItem)
  }

  ulEl.innerHTML = listItem
}

