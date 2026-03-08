let cart=[]

function updateCart(){

document.getElementById("cart-count").innerText=cart.length

}

function addToCart(product){

cart.push(product)

updateCart()

}

document.getElementById("cart-btn").onclick=()=>{

document.getElementById("cart-modal").style.display="flex"

renderCart()

}

function renderCart(){

let el=document.getElementById("cart-items")

el.innerHTML=""

cart.forEach(p=>{

let div=document.createElement("div")

div.innerText=p.title

el.appendChild(div)

})

}

document.getElementById("checkout").onclick=()=>{

let text="Order:%0A"

cart.forEach(p=>{

text+=p.title+"%0A"

})

window.open("https://wa.me/628000000?text="+text)

}


// LOAD PRODUCTS

fetch("data/products/wardrobe.json")

.then(r=>r.json())

.then(p=>{

let grid=document.getElementById("product-grid")

let card=document.createElement("div")

card.className="product-card"

card.innerHTML=`

<img src="${p.images[0]}">

<h4>${p.title}</h4>

<p>${p.price}</p>

<button class="btn">Add to Cart</button>

`

card.querySelector("button").onclick=()=>addToCart(p)

grid.appendChild(card)

})


// LOAD PORTFOLIO

fetch("data/portfolio/kitchen.json")

.then(r=>r.json())

.then(p=>{

let grid=document.getElementById("portfolio-grid")

let img=document.createElement("img")

img.src=p.images[0]

grid.appendChild(img)

})
