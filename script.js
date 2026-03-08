const dataPath="data/"

/* CART */

let cart=JSON.parse(localStorage.getItem("cart")||"[]")

function saveCart(){

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

}

function updateCart(){

const count=document.getElementById("cart-count")

if(count) count.innerText=cart.length

}

updateCart()


function addToCart(product){

cart.push(product)

saveCart()

alert("Ditambahkan ke cart")

}


/* LOAD JSON FOLDER */

async function loadFolder(folder){

const res=await fetch(folder+"/index.json")

return await res.json()

}


/* PORTFOLIO */

async function loadPortfolio(){

const files=await loadFolder("data/portfolio")

const grid=document.getElementById("portfolio-grid")

if(!grid) return

for(let f of files){

const p=await fetch("data/portfolio/"+f).then(r=>r.json())

let img=document.createElement("img")

img.src=p.images[0]

img.onclick=()=>openPortfolio(p)

grid.appendChild(img)

}

}

function openPortfolio(p){

const m=document.getElementById("portfolio-modal")

m.style.display="flex"

document.getElementById("portfolio-main").src=p.images[0]

document.getElementById("portfolio-title").innerText=p.title

document.getElementById("portfolio-category").innerText=p.category

document.getElementById("portfolio-desc").innerText=p.desc

document.getElementById("portfolio-demo").href=p.demo

document.getElementById("portfolio-contact").href=p.contact

}


/* PRODUCTS */

async function loadProducts(){

const files=await loadFolder("data/products")

const grid=document.getElementById("product-grid")

if(!grid) return

for(let f of files){

const p=await fetch("data/products/"+f).then(r=>r.json())

let card=document.createElement("div")

card.className="product-card"

card.innerHTML=`

<img src="${p.images[0]}">

<h4>${p.title}</h4>

<p>${p.price}</p>

`

card.onclick=()=>openProduct(p)

grid.appendChild(card)

}

}

function openProduct(p){

const m=document.getElementById("product-modal")

m.style.display="flex"

document.getElementById("product-main").src=p.images[0]

document.getElementById("product-title").innerText=p.title

document.getElementById("product-price").innerText=p.price

document.getElementById("product-desc").innerText=p.desc

document.getElementById("add-to-cart").onclick=()=>addToCart(p)

}


/* ARTICLES */

async function loadArticles(){

const files=await loadFolder("data/articles")

const list=document.getElementById("latest-articles")

if(!list) return

files.slice(0,5).forEach(async f=>{

const a=await fetch("data/articles/"+f).then(r=>r.json())

let el=document.createElement("div")

el.className="article-card"

el.innerText=a.title

el.onclick=()=>openArticle(a)

list.appendChild(el)

})

}

function openArticle(a){

const m=document.getElementById("article-modal")

m.style.display="flex"

document.getElementById("article-title").innerText=a.title

document.getElementById("article-content").innerHTML=a.content

}


/* CART VIEW */

document.getElementById("nav-cart").onclick=()=>{

const m=document.getElementById("cart-modal")

m.style.display="flex"

renderCart()

}

function renderCart(){

const el=document.getElementById("cart-items")

el.innerHTML=""

cart.forEach(p=>{

let d=document.createElement("div")

d.innerText=p.title+" - "+p.price

el.appendChild(d)

})

}


document.getElementById("checkout").onclick=()=>{

let text="Order:%0A"

cart.forEach(p=>{

text+=p.title+" - "+p.price+"%0A"

})

window.open("https://wa.me/628000000?text="+text)

}


/* ACCORDION */

document.querySelectorAll(".accordion-btn").forEach(btn=>{

btn.onclick=()=>{

let c=btn.nextElementSibling

c.style.display=c.style.display==="block"?"none":"block"

}

})


/* INIT */

loadPortfolio()

loadProducts()

loadArticles()
