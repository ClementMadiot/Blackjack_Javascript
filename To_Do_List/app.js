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

const deleteBtn = document.querySelector('.delete-btn')

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
    ///button
    const deleteBtn = element.querySelector('.delete-btn')
    const editBtn = element.querySelector('.edit-btn')
    deleteBtn.addEventListener('click', deleteItem)

    ///append child
    editBtn.addEventListener('click', editItem)

    list.appendChild(element)

    /// display the alert
    displayAlert('item added to the list', 'succes')
    container.classList.add('show-container')
    /// add localStorage and set back to default
    addToLocalStorage(id, value)
    setBackToDefault()

    /// if value is empty and editFlag is false
  } else if (value && editFlag) {
    editElement.innerHTML = value
    displayAlert('value changed', 'success')
  } else {
    displayAlert('please enter value', 'danger')
  }
}

/// Display alert
function displayAlert(text, action) {
  alert.textContent = text
  alert.classList.add(`alert-${action}`)

  /// Remove alert
  setTimeout(() => {
    alert.textContent = ''
    alert.classList.remove(`alert-${action}`)
  }, 1000)
}

/// Clear Items
function clearItems() {
  const items = document.querySelectorAll('.grocery-item')

  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item)
    })
  }
  container.classList.remove('show-container')
  displayAlert('empty list', 'danger')
  setBackToDefault()
}

// ****** Delete function **********
function deleteItem(e) {
  const articleElement = e.currentTarget.parentElement.parentElement
  const id = element.dataset.id
  list.removeChild(articleElement)
  if (list.children.length === 0) {
    container.classList.remove('show-container')
  }
  displayAlert('item removed', 'danger')
  setBackToDefault()
  /// Remove from localStorage
  removeFromLocalStorage(id)
}

// ****** Edit function **********
function editItem(e) {
  const articleElement = e.currentTarget.parentElement.parentElement

  /// set edit item (previousElementSibling allowed to access to the 'brother' element of btn-container -> paragraph
  editElement = e.currentTarget.parentElement.previousElementSibling
  /// set from value
  grocery.value = editElement.innerHTML
  editFlag = true
  editID = articleElement.dataset.id
  submitBtn.textContent = 'edit'
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
function removeFromLocalStorage(id) {}
// ****** SETUP ITEMS **********
