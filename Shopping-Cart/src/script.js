const shop = document.getElementById('shop')
const cartAmount = document.getElementById('cartAmount')

const shopItemData = [
  {
    id: 'jfhgbvnscs',
    name: 'Casual Shirt',
    price: 45,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-1.jpg',
  },
  {
    id: 'ioytrhndcv',
    name: 'Office Shirt',
    price: 100,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-2.jpg',
  },
  {
    id: 'wuefbncxbsn',
    name: 'T Shirt',
    price: 25,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-3.jpg',
  },
  {
    id: 'thyfhcbcv',
    name: 'Mens Suit',
    price: 300,
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing.',
    img: 'images/img-4.jpg',
  },
]
// let basket = []
basket = JSON.parse(localStorage.getItem('basketItem')) || []

const generateShop = () => {
  return (shop.innerHTML = shopItemData
    // i = index / argument
    .map((i) => {
      let { id, name, price, desc, img } = i
      let searchBasket = basket.find((i) => i.id === id) || []
      return `
    <div id='itemId_${id}' class="item">
    <img width="200" src=${img} alt="">
        <div class="details">
          <h2>${name}</h2>
          <p>${desc}</p>
          <div class="price-quantity">
            <p>$ ${price}</p>
            <div class="btn">
              <i  onclick='decrement(${id})' class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${searchBasket.item === undefined ? 0 : searchBasket.item}</div>
              <i onclick='increment(${id})' class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>`
    })
    .join(''))
}
generateShop()

let increment = (i) => {
  let selectedId = i.id
  // a = argument
  let search = basket.find((a) => a.id === selectedId)
  if (search === undefined) {
    basket.push({
      id: selectedId,
      item: 1,
    })
  } else {
    search.item += 1
  }
  update(selectedId)
  localStorage.setItem('basketItem', JSON.stringify(basket))
}

let decrement = (i) => {

  let selectedId = i.id
  let searchPara = basket.find((a) => a.id === selectedId)
  if (!searchPara || !searchPara.item || searchPara.item === 0) {
    return 0
  } else {
    searchPara.item -= 1
  }
  update(selectedId)
  basket = basket.filter((a) => a.item != 0)

  localStorage.setItem('basketItem', JSON.stringify(basket))
}
let update = (id) => {
  let searchPara = basket.find((a) => a.id === id)
  document.getElementById(id).innerHTML = searchPara.item
  calculate()
}

let calculate = () => {
  // reduce = accumulateur
  basketAmount = basket.map((a) => a.item).reduce((x, y) => x + y, 0)
  cartAmount.innerHTML = basketAmount
}
calculate()