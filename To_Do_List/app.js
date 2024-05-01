// ****** SELECT ITEMS **********
const form = document.querySelector('.grocery-form')
const alert = document.querySelector('.alert')
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement
let editFlag = false
let editID = ''

// ****** EVENT LISTENERS **********
//: submit form
form.addEventListener('submit', addItem)

// ****** FUNCTIONS **********
function addItem(e) {
  e.preventDefault()
  const value = grocery.value
  if (!value) {
    console.log('false')
  }
  //! not good practice to have a unique number
  const id = new Date().getTime().toString()
  /// if value is true and editFlag is false
  if (value && !editFlag) {
    console.log('add item')
    /// if value is empty and editFlag is false
  } else if (value && editFlag) {
    console.log('editing')
  } else {
    displayAlert('please enter value', 'danger')
  }
}
//: Display alert
function displayAlert(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

//: Remove alert
setTimeout(() => {
  alert.textContent = ''
  alert.classList.remove(`alert-${action}`)
}, 1000);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
