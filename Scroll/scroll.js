// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// in css add height auto to display the nav responsively
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

//: variable ://
const date = document.getElementById('date')
const navToggle = document.querySelector('.nav-toggle')
const linksContainer = document.querySelector('.links-container')
const links = document.querySelector('.links')

const navbar = document.getElementById('nav')
const topLink = document.querySelector('.top-link')

// ********** set date ************
date.innerHTML = new Date().getFullYear()
// ********** close links ************

navToggle.addEventListener('click', () => {
  // linksContainer.classList.toggle('show-links')
  /// calculate the height
  const containerHeight = linksContainer.getBoundingClientRect().height
  const linksHeight = links.getBoundingClientRect().height

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`
  } else {
    linksContainer.style.height = 0
  }
})
// ********** fixed navbar ************
window.addEventListener('scroll', () => {
  const scrollHeight = window.scrollY
  const navHeight = navbar.getBoundingClientRect().height
  console.log(window)

  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {    
    navbar.classList.remove('fixed-nav')
  }

  /// arrow btn
  if (scrollHeight > 500) {
    topLink.classList.add('show-link')
  } else {
    topLink.classList.remove('show-link')
    
  }
})

// ********** smooth scroll ************
// select links
