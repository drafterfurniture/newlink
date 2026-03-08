// PORTFOLIO

fetch("data/portfolio.json")
.then(r=>r.json())
.then(items=>{

const grid=document.getElementById("portfolio-grid")

items.forEach(p=>{

let img=document.createElement("img")

img.src=p.images[0]

img.onclick=()=>openPortfolio(p)

grid.appendChild(img)

})

})

function openPortfolio(p){

document.getElementById("portfolio-modal").style.display="flex"

document.getElementById("portfolio-main").src=p.images[0]

document.getElementById("portfolio-title").innerText=p.title
document.getElementById("portfolio-category").innerText=p.category
document.getElementById("portfolio-desc").innerText=p.desc

document.getElementById("portfolio-demo").href=p.demo
document.getElementById("portfolio-contact").href=p.contact

let thumbs=document.getElementById("portfolio-thumbs")

thumbs.innerHTML=""

p.images.forEach(img=>{

let t=document.createElement("img")

t.src=img

t.onclick=()=>{

document.getElementById("portfolio-main").src=img

}

thumbs.appendChild(t)

})

}

document.getElementById("close-portfolio").onclick=()=>{

document.getElementById("portfolio-modal").style.display="none"

}


// PRODUCTS

fetch("data/products.json")
.then(r=>r.json())
.then(products=>{

const grid=document.getElementById("product-grid")

products.forEach(p=>{

let card=document.createElement("div")

card.className="product-card"

card.innerHTML=`

<img src="${p.images[0]}">

<div class="product-title">${p.title}</div>

<div class="product-price">${p.price}</div>

`

card.onclick=()=>openProduct(p)

grid.appendChild(card)

})

})

function openProduct(p){

document.getElementById("product-modal").style.display="flex"

document.getElementById("product-main").src=p.images[0]

document.getElementById("product-title").innerText=p.title
document.getElementById("product-price").innerText=p.price
document.getElementById("product-desc").innerText=p.desc

document.getElementById("product-demo").href=p.demo
document.getElementById("product-buy").href=p.buy

let thumbs=document.getElementById("product-thumbs")

thumbs.innerHTML=""

p.images.forEach(img=>{

let t=document.createElement("img")

t.src=img

t.onclick=()=>{

document.getElementById("product-main").src=img

}

thumbs.appendChild(t)

})

}

document.getElementById("close-product").onclick=()=>{

document.getElementById("product-modal").style.display="none"

}


// ARTICLES

fetch("data/articles.json")
.then(r=>r.json())
.then(articles=>{

const list=document.getElementById("article-list")

articles.forEach(a=>{

let el=document.createElement("div")

el.className="article"

el.innerHTML=`

<div class="article-title">${a.title}</div>

<div class="article-desc">${a.desc}</div>

`

list.appendChild(el)

})

})
