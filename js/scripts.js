const mainDishes = document.getElementById('mainDishes');
const sideDishes = document.getElementById('sideDishes');

let formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

$('#phone').mask('(00) 0000-00000')

const mainDishesProducts = {
  1: {
    id: 1,
    name: 'Bife com batatas',
    image: './assets/bife.jpg',
    price: '30'
  },
  2: {
    id: 2,
    name: 'Coxa de frango crocante',
    image: './assets/coxa.jpg',
    price: '25'
  },
  3: {
    id: 3,
    name: 'Carne de panela',
    image: './assets/panela.jpg',
    price: '22'
  }
}

const sideDishesProducts = {
  4: {
    id: 4,
    name: 'Farofa',
    image: './assets/farofa.jpg',
    price: '10'
  },
  5: {
    id: 5,
    name: 'Salada',
    image: './assets/salad.jpg',
    price: '8'
  },
  6: {
    id: 6,
    name: 'Torresmo',
    image: './assets/torresmo.jpg',
    price: '12'
  }
}

Object.keys(mainDishesProducts).forEach((key) => {
  mainDishes.innerHTML += `
      <div class="option" id="${mainDishesProducts[key].id}">
        <div class="productImageContainer">
            <img class="productImage" src="${mainDishesProducts[key].image}" alt="${mainDishesProducts[key].name}">
        </div>
        <p class="disheName">${mainDishesProducts[key].name}</p>
        <p class="price">${formatter.format(mainDishesProducts[key].price)}</p>
        <div class="quantity buttons_added">
            <input type="button" value="-" class="minus">
              <input id="${mainDishesProducts[key].id}" type="number" step="1" min="0" max="" name="quantity" value="0" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
            <input type="button" value="+" class="plus">
        </div>
      </div>
  `
})

Object.keys(sideDishesProducts).forEach((key) => {
  sideDishes.innerHTML += `
      <div class="option" id="${sideDishesProducts[key].id}">
        <div class="productImageContainer">
            <img class="productImage" src="${sideDishesProducts[key].image}" alt="${sideDishesProducts[key].name}">
        </div>
        <p class="disheName">${sideDishesProducts[key].name}</p>
        <p class="price">${formatter.format(sideDishesProducts[key].price)}</p>
        <div class="quantity buttons_added">
            <input type="button" value="-" class="minus">
              <input id="${sideDishesProducts[key].id}" type="number" step="1" min="0" max="" name="quantity" value="0" title="Qty" class="input-text qty text" size="4" pattern="" inputmode="">
            <input type="button" value="+" class="plus">
        </div>
      </div>
  `
})

const btnCalular = document.getElementById("btnCalcular");
btnCalular.addEventListener("click", (event) => {
  event.preventDefault();

  const buyedProducts = []
  const quantitiesAndProducts = document.getElementsByName("quantity");

  quantitiesAndProducts.forEach((quantity) => {
    const quantityInt = parseInt(quantity.value)
    if (quantityInt > 0) {
      if (mainDishesProducts.hasOwnProperty(quantity.id)) {
        mainDishesProducts[quantity.id]['quantity'] = quantityInt
        buyedProducts.push(mainDishesProducts[quantity.id])
      }
      if (sideDishesProducts.hasOwnProperty(quantity.id)) {
        sideDishesProducts[quantity.id]['quantity'] = quantityInt
        buyedProducts.push(sideDishesProducts[quantity.id])
      }
    }
  })

  console.log(buyedProducts)

})