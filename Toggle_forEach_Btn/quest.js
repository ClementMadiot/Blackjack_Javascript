const questionText = document.querySelector('.question-text')
const plusIcon = document.querySelector('.plus-icon')
const minusIcon = document.querySelector('.minus-icon')
const questionBtn = document.querySelectorAll('.question-btn')

questionBtn.forEach(function (btn) {
  btn.addEventListener('click', (e) => {
    const question = e.currentTarget.parentElement.parentElement
    question.classList.toggle('show-text')
  })
})


