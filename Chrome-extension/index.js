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

// Save in your button 'save tab'
tabBtn.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)
  })
})

function render(leads) {
  let listItem = ''
  let span = '\u00d7'
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li>  
    <a href='${leads[i]}' target='_blank'>${leads[i]}</a><span data-index="${i}">${span}</span>
    </li> `
  }
  ulEl.innerHTML = listItem
  ulEl.innerHTMLL = span
}
/// delete the element
ulEl.addEventListener('click', function (e) {
  if (e.target.tagName === 'SPAN') {
    // e.target.parentNode.remove()
    // localStorage.removeItem('myLeads', leadFromLocalStorage)

    const dataSpan = parseInt(e.target.dataset.index)
    myLeads.splice(dataSpan, 1)
    render(myLeads)
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
  }
})

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

/// Delete all element
deleteBtn.addEventListener('click', function () {
  localStorage.clear()
  myLeads = []
  render(myLeads)
})
