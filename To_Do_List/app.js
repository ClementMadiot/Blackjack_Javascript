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

//: clear items
clearBtn.addEventListener('click', clearItems)

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
    /// add class and id
    const element = document.createElement('article')
    element.classList.add('grocery-item')
    const attr = document.createAttribute('data-id')
    attr.value = id
    element.setAttributeNode(attr)
    element.innerHTML = `
          <p class="title">${value}</p>
          <div class="btn-container">
            <button class="edit-btn">
              <i class="fas fa-edit"></i>
            </button>
            <button class="delete-btn">
              <i class="fas fa-trash"></i>
            </button>
          </div>`
    list.appendChild(element)

    //: display the alert
    displayAlert('item added to the list', 'succes')
    container.classList.add('show-container')
    //: add localStorage and set back to default
    addToLocalStorage(id, value)
    setBackToDefault()

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
  }, 1000)
}
//: Clear Items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item')
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item)
    })
  }
  container.classList.remove('show-container')
  displayAlert('empty list', 'danger')
}

// ****** SET BACK TO DEFAULT **********
function setBackToDefault() {
  grocery.value = ''
  editFlag = false
  editID = ''
  submitBtn.textContent = 'submit'
}
// ****** LOCAL STORAGE **********
function addToLocalStorage(id, value) {
  console.log('add')
}
// ****** SETUP ITEMS **********
