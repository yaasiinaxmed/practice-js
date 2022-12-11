const cartCounter = document.querySelector(".cart__counter");
const cartDOM = document.querySelector(".cart__items");

const addToCartBtn = document.querySelectorAll(".btn__add__to__cart");

let carItems = [];

cartCounter.addEventListener("click", () => {
    cartDOM.classList.toggle("active");
});

addToCartBtn.forEach(btn => {
    btn.addEventListener("click", () => {
      let parentElement = btn.parentElement;
      const product = {
        id : parentElement.querySelector("#product__id").value,
        name : parentElement.querySelector(".product__name").innerText,
        img : parentElement.querySelector("#image").getAttribute("src"),
        price : parentElement.querySelector(".product__price").innerText.replace("$", ""),
        quantity : 1 ,
      };

      let isInCart = carItems.filter(item => item.id === product.id).length > 0;

      if (!isInCart) {
         addItemToTheDOM(product);
      } else {
        alert("Product already In the Cart");
        return;
      }

      carItems.push(product);
      
    });
});

function addItemToTheDOM(product) {
 
    cartDOM.insertAdjacentHTML("afterbegin", `
     <div class="cart__item">
     <input type="hidden" name="" id="product__id" value="${product.id}">
     <img src="${product.img}" alt="" id="product__image">
     <h4 class="product__name">${product.name}</h4>
     <a href="#" class="btn__small" action="decrease">&minus;</a>
     <h4 class="product__quantity">${product.quantity}</h4>
     <a href="#" class="btn__small" action="increase">&plus;</a>
     <span class="product__price">${product.price}</span>
     <a href="#" class="btn__small btn__remove" action="remove">&times;</a>
     </div>
    `);

};

