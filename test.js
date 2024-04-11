let num1 = 1
let num2 = 2
let allNum = [ num1, num2 ]

for (let i = 0; i < allNum.length; i++) {
  console.log(allNum[i])
  cardEl.textContent += ' ' + allNum[i]
}
