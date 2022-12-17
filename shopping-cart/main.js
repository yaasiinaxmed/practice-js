const cartBtn = document.querySelector(".cart");
const container = document.querySelector(".container");
const stars = document.querySelectorAll(".stars i");
const addCartBtn = document.querySelectorAll(".btn");
const contianerProducts = document.querySelector(".products-cart");
const totalAmount = document.querySelector(".checkout h3");
const quantitiyItem = document.querySelector("#quantity");

const products = JSON.parse(localStorage.getItem("product")) || [];

let correntNumber = localStorage.getItem("countNumber") || 1;

cartBtn.addEventListener("click", () => {
    container.classList.toggle("active");
});

starsIcon();

function starsIcon() {
    stars.forEach(star => {
        star.addEventListener("click", () => {
            if (star.classList.contains("bi-star")) {
                star.classList.replace("bi-star", "bi-star-fill");
            } else {
                star.classList.replace("bi-star-fill", "bi-star");
            }
        });
    });
};

const addProduct = (img,name,price,id) => {
    products.push(
        {
            img: img,
            name: name,
            price: price,
        }
    );

    localStorage.setItem("product", JSON.stringify(products));

    return {img,name,price}
}

const removePro = (removeText,product) => {
    removeText.addEventListener("click", () => {
        product.remove();
        localStorage.removeItem("product")
    });
};

const counter = (count_btns,count_text,price,total,product) => {
    count_btns.forEach(count_btn => {
       count_btn.addEventListener("click", () => {
         if (count_btn.innerText === '+') {
            correntNumber++;
            count_text.innerText = correntNumber;
            const totolPrice = count_text.innerText * price.innerText;
            total.innerText = totolPrice;

            localStorage.setItem("countNumber", correntNumber);
            localStorage.setItem("totalPrice", total.innerText);

         } else {
            if(correntNumber < 1) {
               product.remove();
               localStorage.removeItem("product");
            } else {
                correntNumber--;
                count_text.innerText = correntNumber;
                const totalPrice = total.innerText - price.innerText;
                total.innerText = totalPrice;

                localStorage.setItem("countNumber", correntNumber);
                localStorage.setItem("totalPrice", total.innerText);

            };
         };
       });
    });
};

const createElementCart = ({img,name,price}) => {

    contianerProducts.innerHTML += 
    `<div class="product-cart">
    <img src="${img}" alt="" class="img-cart">
    <div class="contianer-cart">
        <div class="detail">
            <small>${name}</small>
            <price>Price: $ <span class="price-cart">${price}</span></price>
            <a>remove</a>
        </div>
        <div class="counter">
            <div class="count-btn">-</div>
            <div class="count">${correntNumber}</div>
            <div class="count-btn">+</div>
        </div>
        <div>$<span class="total">${price}</span></div>
    </div>
   </div>`;   

   document.querySelectorAll(".product-cart").forEach(product => {
      const removeProduct = product.querySelector("a");
      const count_btn = product.querySelectorAll(".count-btn");
      const count = product.querySelector(".count");
      const price = product.querySelector(".price-cart");
      const total = product.querySelector(".total");
      const removeItem = product;

      total.innerText = localStorage.getItem("totalPrice");
      removePro(removeProduct,product);
      counter(count_btn,count,price,total,removeItem);
    });
   
};

products.forEach(createElementCart)

const addCar = () => {
    addCartBtn.forEach(btn => {
       btn.addEventListener("click", () => {
            const parentElement = btn.parentElement.parentElement;
            const img = parentElement.querySelector("img");
            const price = parentElement.querySelector(".price");
            const name = parentElement.querySelector(".name-pro");
            // const quantity = document.querySelector(".count");

            const NewProduct = addProduct(
                img.getAttribute("src"),
                name.innerText,
                price.innerText,
                // quantity.innerText,
            );

            

            createElementCart(NewProduct);

       });
    });
};

addCar();
