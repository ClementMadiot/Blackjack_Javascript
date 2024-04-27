//! SIDE BAR

const toggleBtn = document.querySelector('.sidebar-toggle')
const closeBtn = document.querySelector('.closeBtn')
const sidebar = document.querySelector('.sidebar')

toggleBtn.addEventListener('click', () => {
  console.log('c')
  sidebar.classList.toggle('show-sidebar')
})
