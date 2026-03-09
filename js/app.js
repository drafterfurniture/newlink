const popup=document.getElementById("popup")

let cart=JSON.parse(localStorage.getItem("cart")||"[]")

function updateCart(){

document.getElementById("cart-count").innerText=cart.length

}

updateCart()

/* popup */

function openPopup(html){

popup.innerHTML=`<div class="popup-box">${html}</div>`

popup.style.display="flex"

}

popup.onclick=e=>{

if(e.target===popup) popup.style.display="none"

}

/* parallax */

window.addEventListener("scroll",()=>{

let bg=document.querySelector(".hero-bg")

bg.style.transform=`translateY(${window.scrollY*0.3}px)`

})

/* links */

fetch("data/links.json")
.then(r=>r.json())
.then(data=>{

links.innerHTML=data.map(l=>

`<a class="link" href="${l.url}" target="_blank">${l.title}</a>`

).join("")

})

/* projects */

fetch("data/projects.json")
.then(r=>r.json())
.then(data=>{

projects.innerHTML=data.map(p=>

`<div class="card" onclick='projectPopup(${JSON.stringify(p)})'>
<img src="${p.cover}">
<p>${p.title}</p>
</div>`

).join("")

})

function projectPopup(p){

let imgs=p.images.map(i=>`<img src="${i}">`).join("")

openPopup(`

<h3>${p.title}</h3>

${imgs}

<p>${p.description}</p>

<a class="btn" href="${p.demo}">Demo</a>

<a class="btn" href="https://wa.me/${p.whatsapp}">Hubungi</a>

`)

}

/* products */

fetch("data/products.json")
.then(r=>r.json())
.then(data=>{

products.innerHTML=data.map(p=>

`<div class="card" onclick='productPopup(${JSON.stringify(p)})'>
<img src="${p.images[0]}">
<p>${p.title}</p>
</div>`

).join("")

})

function productPopup(p){

let i=0

function render(){

return `

<h3>${p.title}</h3>

<div class="slider">

<img src="${p.images[i]}">

</div>

<p>${p.description}</p>

<b>Rp ${p.price}</b>

<br>

<button class="btn" onclick='addCart(${JSON.stringify(p)})'>Add to Cart</button>

`

}

openPopup(render())

}

/* cart */

function addCart(p){

cart.push(p)

localStorage.setItem("cart",JSON.stringify(cart))

updateCart()

}

function openCart(){

let html=""

let total=0

cart.forEach(i=>{

total+=i.price

html+=`<p>${i.title} - ${i.price}</p>`

})

openPopup(`

<h3>Cart</h3>

${html}

<b>Total ${total}</b>

<br>

<a class="btn" href="https://wa.me/628XXXX?text=Order ${total}">

Checkout WhatsApp

</a>

`)

}

/* posts */

fetch("data/posts.json")
.then(r=>r.json())
.then(data=>{

posts.innerHTML=data.slice(0,5).map(p=>

`<div class="blog">${p.title}</div>`

).join("")

})

function openCV(){

openPopup(`

<h3>CV</h3>

<a class="btn" href="cv/cv.pdf">Download CV</a>

`)

}
