/* LINKS */

fetch("data/links.json")
.then(r=>r.json())
.then(data=>{

let html=""

data.forEach(l=>{

html+=`<a class="link" href="${l.url}" target="_blank">${l.title}</a>`

})

links.innerHTML=html

})

/* PROJECT */

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

let imgs=""

p.images.forEach(i=>{
imgs+=`<img src="${i}">`
})

openPopup(`

<h3>${p.title}</h3>

${imgs}

<p>${p.description}</p>

<a class="btn" href="${p.demo}">Demo</a>

<a class="btn" href="https://wa.me/${p.whatsapp}">Hubungi</a>

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

let thumbs=""

p.images.forEach(i=>{

thumbs+=`<img src="${i}" onclick="document.getElementById('mainImg').src='${i}'">`

})

openPopup(`

<h3>${p.title}</h3>

<img id="mainImg" src="${p.images[0]}">

<div class="thumbs">

${thumbs}

</div>

<p>${p.description}</p>

<b>Rp ${p.price}</b>

<br><br>

<button class="btn" onclick='addCart(${JSON.stringify(p)})'>Add to Cart</button>

`)

}

/* POSTS */

fetch("data/posts.json")
.then(r=>r.json())
.then(data=>{

let html=""

data.slice(0,5).forEach(p=>{

html+=`

<div class="blog">

${p.title}

</div>

`

})

posts.innerHTML=html

})

function openCV(){

openPopup(`

<h3>Curriculum Vitae</h3>

<a class="btn" href="cv/cv.pdf">Download CV</a>

`)

}
