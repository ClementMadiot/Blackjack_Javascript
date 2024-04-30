const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: 39.99,
    img: './images/item-10.jpg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
]

const sectionCenter = document.querySelector('.section-center')
const container = document.querySelector('.btn-container')
// const filterBtns = document.querySelectorAll('.filter-btn')

// load items
// window.addEventListener('DOMContentLoaded', function () {
//   displayMenu(menu)
// })

//* Menu
function displayMenu(menuItems) {
  /// menuItems -> menu
  let displayCartMenu = menuItems
    .map(function (item) {
      // console.log(item);
      return `<article class="menu-item">
          <img src=${item.img} alt=${item.title} class="photo" />
          <div class="item-info">
          <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
              </header>
            <p class="item-text">
            ${item.desc}
            </p>
            </div>
            </article>`
    })
    .join('')
  sectionCenter.innerHTML = displayCartMenu
  // console.log(displayCartMenu)
}
displayMenu(menu)

//* Button
function displayBtnfilter() {
  //:-------------------------------------// 
  //:---------------filter item------------//
  //:-------------------------------------//

  /// values -> return the category || item -> return the array menu
  const categories = menu.reduce(
    (values, item) => {
      /// if it's not in the array
      if (!values.includes(item.category)) {
        values.push(item.category)
      }
      /// if item is in the array then return the value
      return values
    },
    ['all']
  )

  //:-------------------------------------//
  //:------------Display Button-----------//
  //:-------------------------------------//

  const categoryBtns = categories
    .map((cat) => {
      return `<button type="button" class="filter-btn" data-id="${cat}">${cat}</button>`
    })
    .join('')
  container.innerHTML = categoryBtns
  const filterBtns = document.querySelectorAll('.filter-btn')

  //:-------------------------------------//
  //:-----------------filter--------------//
  //:-------------------------------------//

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', function (e) {
      //; dataset -> data-id in html
      // console.log(e.currentTarget.dataset.id)
      const category = e.currentTarget.dataset.id

      /// for one category
      const menuCategory = menu.filter(function (menuItem) {
        if (menuItem.category === category) {
          return menuItem
        }
      })
      /// for all category
      if (category === 'all') {
        displayMenu(menu)
      } else {
        displayMenu(menuCategory)
      }
    })
  })
  return categories
}
displayBtnfilter(menu)
