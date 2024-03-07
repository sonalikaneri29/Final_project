const renderData = document.querySelector(".renderData");
const renderCartData = document.querySelector(".renderCartData");
const dynamicCount = document.querySelector(".dynamic-count");
const tContainer = document.querySelector(".tContainer");
const line = document.querySelector(".line");
const totalPrice = document.getElementById("total_price");
const emptyCart = document.querySelector(".emptyCart");
const cItems = document.querySelector(".cItems");
let emptyC = false;
let arrr = [];
let calculateTotal = [];

async function getData() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    data.forEach((ele) => {
      console.log(data)
      const productMainDiv = document.createElement("div");
      const createImgEle = document.createElement("img");
      const createTitle = document.createElement("p");
      const createPriceEle = document.createElement("p");
      const btnEle = document.createElement("button");

      createImgEle.src = ele.image;
      createImgEle.classList.add("myImages");
      productMainDiv.classList.add("box-main");

      createTitle.textContent = `${ele.title.slice(0, 35)}...`;
      createTitle.classList.add("productTitle");

      createPriceEle.textContent = `Price: $${ele.price}`;
      createPriceEle.classList.add("price-element");

      btnEle.textContent = "Add to Cart";
      btnEle.classList.add("btn-element");

      productMainDiv.append(createImgEle, createTitle, createPriceEle, btnEle);
      renderData.appendChild(productMainDiv);

      btnEle.addEventListener("click", () => addToCart(ele.image, ele.price));
    });
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  
}

function addToCart(img, price) {
  try {
    arrr.push({ ii: img, pp: price });
    alert("Product Added to Cart");
    dynamicCount.innerHTML++;
    emptyC = true;

    if (emptyC) {
      cItems.style.display = "flex";
      emptyCart.style.display = "none";
    }

    const cartMDiv = document.createElement("div");
    const cartImgEle = document.createElement("img");
    const cartTrashBtn = document.createElement("i");

    cartTrashBtn.classList.add("fa-solid", "fa-trash");
    tContainer.style.display = "flex";
    line.style.display = "block";

    cartTrashBtn.addEventListener("click", () => deleteItem(price));
    cartImgEle.src = img;
    cartImgEle.classList.add("cartImgElement");

    cartMDiv.classList.add("cart-styling");
    const cartPriceEle = document.createElement("p");
    cartPriceEle.textContent = `$${price}`;
    cartPriceEle.classList.add("cart-pprice");

    cartMDiv.append(cartImgEle, cartPriceEle, cartTrashBtn);
    renderCartData.appendChild(cartMDiv);

    calculateTotal.push(price);
    const myTotal = calculateTotal.reduce((accum, curVal) => accum + curVal);
    totalPrice.innerHTML = `Total Price: $${myTotal.toFixed(2)}`;
  } catch (error) {
    console.error("Error adding to cart:", error);
  }
}

function deleteItem(pr) {
  try {
    const cartMDiv = document.querySelector(".cart-styling");
    cartMDiv.remove();
    const index = calculateTotal.indexOf(pr);
    if (index !== -1) {
      calculateTotal.splice(index, 1);
    }
    const myTotal = calculateTotal.reduce((accum, curVal) => accum + curVal, 0);
    totalPrice.innerHTML = `Total Price: $${myTotal.toFixed(2)}`;
    dynamicCount.innerHTML--;
  } catch (error) {
    console.error("Error deleting item:", error);
  }
}

getData();
























































// // Define Variables

// let renderData = document.querySelector(".renderData");
// let renderCartData = document.querySelector(".renderCartData");
// let dynamic_count = document.querySelector(".dynamic-count");
// let tContainer = document.querySelector(".tContainer");
// let line = document.querySelector(".line");
// let total_price = document.getElementById("total_price");
// let emptyCart = document.querySelector(".emptyCart");
// let cItems = document.querySelector(".cItems");
// let emptyC = false;
// let arrr = [];
// let calculateTotal = [];
// // Get Data From Api

// async function getData() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();


//   data.map((ele) => {
//     let productMainDiv = document.createElement("div");
//     let createImgEle = document.createElement("img");
//     let createTitle = document.createElement("p");
//     let createPriceEle = document.createElement("p");
//     let btnEle = document.createElement("button");
//     let btnText = document.createTextNode("Add to Cart");
//     let createPriceText = document.createTextNode(`Price : $${ele.price}`);
//     let createTextTitle = document.createTextNode(`${ele.title.slice(0,35)}...`);
//     createImgEle.setAttribute("src", ele.image);
//     createImgEle.setAttribute("class", "myImages");
//     productMainDiv.setAttribute("class" , "box-main")
//     createTitle.appendChild(createTextTitle);
//     createPriceEle.setAttribute("class" , 'price-element')
//     btnEle.setAttribute("class" , "btn-element")
//     createPriceEle.appendChild(createPriceText);
//     createTitle.setAttribute("class" , 'productTitle')
//     btnEle.appendChild(btnText);
//     productMainDiv.appendChild(createImgEle);
//     productMainDiv.appendChild(createTitle);
//     productMainDiv.appendChild(createPriceEle);
//     productMainDiv.appendChild(btnEle);
//     renderData.appendChild(productMainDiv);


//     function addToCart(img, price) {
//     arrr.push({ii : img , pp : price});
//       alert("Product Added to Cart")
//       dynamic_count.innerHTML++;
//       emptyC = true
//       if(emptyC){
//         cItems.style.display = "flex";
//         emptyCart.style.display = "none";
//       }
//       let cartMDiv = document.createElement("div");
//       let cartImgEle = document.createElement("img");
//       let cartTrashBtn = document.createElement("i");
//       cartTrashBtn.setAttribute("class", "fa-solid fa-trash");
//       tContainer.style.display = "flex";
//       line.style.display = "block";

//       cartTrashBtn.addEventListener("click" , () => deleteItem(price));
//       cartImgEle.setAttribute("src", img);
//       cartImgEle.setAttribute("class", "cartImgElement");
//       cartMDiv.setAttribute("class" , "cart-styling")
//       let cartPriceEle = document.createElement("p");
//       let cartPriceText = document.createTextNode(`$${price}`);
//       cartPriceEle.setAttribute("class" , "cart-pprice")
//       cartPriceEle.appendChild(cartPriceText);
//       cartMDiv.appendChild(cartImgEle);
//       cartMDiv.appendChild(cartPriceEle);
//       cartMDiv.appendChild(cartTrashBtn);
//       renderCartData.appendChild(cartMDiv);
//       calculateTotal.push(price);
//       let myTotal = calculateTotal.reduce((accum , curVal) => {
//         return accum + curVal
//      })
//      total_price.innerHTML = `Total Price : $${myTotal.toFixed(2)}`
//       function deleteItem(pr){
//         cartMDiv.remove();
//         console.log(pr)
//         myTotal = myTotal - pr;
//         total_price.innerHTML = `Total Price : $${myTotal}`
//         dynamic_count.innerHTML--;
//       }
    
//     }
//     btnEle.addEventListener("click", () => addToCart(ele.image, ele.price));
//   });
// }

// getData();








// const renderData = document.querySelector(".renderData");
// const renderCartData = document.querySelector(".renderCartData");
// const dynamicCount = document.querySelector(".dynamic-count");
// const tContainer = document.querySelector(".tContainer");
// const line = document.querySelector(".line");
// const totalPrice = document.getElementById("total_price");
// const emptyCart = document.querySelector(".emptyCart");
// const cItems = document.querySelector(".cItems");
// let emptyC = false;
// let arrr = [];
// let calculateTotal = [];

// async function getData() {
//   const res = await fetch("https://fakestoreapi.com/products");
//   const data = await res.json();

//   data.forEach((ele) => {
//     const productMainDiv = document.createElement("div");
//     const createImgEle = document.createElement("img");
//     const createTitle = document.createElement("p");
//     const createPriceEle = document.createElement("p");
//     const btnEle = document.createElement("button");

//     createImgEle.src = ele.image;
//     createImgEle.classList.add("myImages");
//     productMainDiv.classList.add("box-main");

//     createTitle.textContent = `${ele.title.slice(0, 35)}...`;
//     createTitle.classList.add("productTitle");

//     createPriceEle.textContent = `Price: $${ele.price}`;
//     createPriceEle.classList.add("price-element");

//     btnEle.textContent = "Add to Cart";
//     btnEle.classList.add("btn-element");

//     productMainDiv.append(createImgEle, createTitle, createPriceEle, btnEle);
//     renderData.appendChild(productMainDiv);

//     btnEle.addEventListener("click", () => addToCart(ele.image, ele.price));
//   });
// }

// function addToCart(img, price) {
//   arrr.push({ ii: img, pp: price });
//   alert("Product Added to Cart");
//   dynamicCount.innerHTML++;
//   emptyC = true;

//   if (emptyC) {
//     cItems.style.display = "flex";
//     emptyCart.style.display = "none";
//   }

//   const cartMDiv = document.createElement("div");
//   const cartImgEle = document.createElement("img");
//   const cartTrashBtn = document.createElement("i");

//   cartTrashBtn.classList.add("fa-solid", "fa-trash");
//   tContainer.style.display = "flex";
//   line.style.display = "block";

//   cartTrashBtn.addEventListener("click", () => deleteItem(price));
//   cartImgEle.src = img;
//   cartImgEle.classList.add("cartImgElement");

//   cartMDiv.classList.add("cart-styling");
//   const cartPriceEle = document.createElement("p");
//   cartPriceEle.textContent = `$${price}`;
//   cartPriceEle.classList.add("cart-pprice");

//   cartMDiv.append(cartImgEle, cartPriceEle, cartTrashBtn);
//   renderCartData.appendChild(cartMDiv);

//   calculateTotal.push(price);
//   const myTotal = calculateTotal.reduce((accum, curVal) => accum + curVal);
//   totalPrice.innerHTML = `Total Price: $${myTotal.toFixed(2)}`;

//   function deleteItem(pr) {
//     cartMDiv.remove();
//     myTotal -= pr;
//     totalPrice.innerHTML = `Total Price: $${myTotal}`;
//     dynamicCount.innerHTML--;
//   }
// }

// getData();



