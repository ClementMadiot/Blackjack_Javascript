// input element
const inputEl = document.getElementById('inputEl')
const inputBtn = document.getElementById('inputBtn')
// list Element
const ulEl = document.getElementById('ulEl')
let myLeads = []

let leadFromLocalStorage = JSON.parse(localStorage.getItem("myLeads", myLeads))

if(leadFromLocalStorage){
  myLeads = leadFromLocalStorage
  renderLeads()
} else {
  console.log("storage is empty")
}



///Evenement onClick
inputBtn.addEventListener('click', (e) => {
  myLeads.push(inputEl.value)
  inputEl.value = ''
  localStorage.setItem("myLeads", JSON.stringify(myLeads)) 
  
  renderLeads()

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

