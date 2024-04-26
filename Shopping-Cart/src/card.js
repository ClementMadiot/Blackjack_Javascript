const label = document.getElementById('label')
const shoppingCart = document.getElementById('shoppingCart')
basket = JSON.parse(localStorage.getItem('basketItem')) || []

let calculate = () => {
  // reduce = accumulateur
  basketAmount = basket.map((a) => a.item).reduce((x, y) => x + y, 0)
  cartAmount.innerHTML = basketAmount
}
calculate()

let generateCartItems = () => {
  if (basket.length !== 0) {
    return (shoppingCart.innerHTML = basket
      .map((a) => {
        let { id, item } = a
        let search = shopItemsData.find((y) => y.id === id) || []
        return `
      <div class='cart-item'>
      <img width='100' src=${search.img} alt=''/>
      </div>
      `
      })
      .join(''))
  } else {
    shoppingCart.innerHTML = ``
    label.innerHTML = `
    <h2>Cart is Empty !</h2>
    <a href='index.html'>
    <button class='homeBtn'>Back to home</button>
    </a>
    `
  }
}
generateCartItems()
