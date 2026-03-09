const popup = document.getElementById("popup")

let cart = JSON.parse(localStorage.getItem("cart") || "[]")

function openPopup(html){
popup.innerHTML = `<div class="popup-box">${html}</div>`
popup.style.display="flex"
}

popup.onclick = e=>{
if(e.target===popup) popup.style.display="none"
}

/* LINKS */

fetch("data/links.json")
.then(r=>r.json())
.then(data=>{

let html=""

data.forEach(link=>{
html+=`<a class="link-btn" href="${link.url}" target="_blank">${link.title}</a>`
})

document.getElementById("links").innerHTML=html

})

/* PROJECTS */

fetch("data/projects.json")
.then(r=>r.json())
.then(data=>{

let html=""

data.forEach(p=>{

html+=`
<div class="card" onclick='projectPopup(${JSON.stringify(p)})'>
<img src="${p.cover}">
<p>${p.title}</p>
</div>
`

})

projects.innerHTML=html

})

function projectPopup(p){

let images=p.images.map(i=>`<img src="${i}" style="width:100%;margin-bottom:6px">`).join("")

openPopup(`

<h3>${p.title}</h3>

${images}

<p>${p.description}</p>

<a href="${p.demo}" target="_blank">Demo</a>

<br><br>

<a href="https://wa.me/${p.whatsapp}">Hubungi</a>

`)

}

/* PRODUCTS */

fetch("data/products.json")
.then(r=>r.json())
.then(data=>{

let html=""

data.forEach(p=>{

html+=`

<div class="card" onclick='productPopup(${JSON.stringify(p)})'>

<img src="${p.images[0]}">

<p>${p.title}</p>

</div>

`

})

products.innerHTML=html

})

function productPopup(p){

let images=p.images.map(i=>`<img src="${i}" style="width:100%;margin-bottom:6px">`).join("")

openPopup(`

<h3>${p.title}</h3>

${images}

<p>${p.description}</p>

<b>Rp ${p.price}</b>

<br><br>

<button onclick='addCart(${JSON.stringify(p)})'>Add to Cart</button>

`)

}

function addCart(p){

cart.push(p)

localStorage.setItem("cart",JSON.stringify(cart))

alert("ditambahkan ke cart")

}

/* CART */

function openCart(){

let html=""

let total=0

cart.forEach(item=>{
total+=item.price

html+=`<p>${item.title} - Rp ${item.price}</p>`
})

openPopup(`

<h3>Cart</h3>

${html}

<br>

<b>Total : Rp ${total}</b>

<br><br>

<a href="https://wa.me/62XXXXXXXX?text=Order%20${total}">
Checkout WhatsApp
</a>

`)

}

/* POSTS */

fetch("data/posts.json")
.then(r=>r.json())
.then(data=>{

let html=""

data.slice(0,5).forEach(p=>{

html+=`

<div class="blog-card">

<p>${p.title}</p>

</div>

`

})

posts.innerHTML=html

})

function openCV(){

openPopup(`

<h3>Curriculum Vitae</h3>

<a href="cv/cv.pdf">Download CV</a>

`)

}
