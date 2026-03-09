/* LINKS */

fetch("data/links.json")
.then(r=>r.json())
.then(data=>{

links.innerHTML=data.map(l=>
`<a class="link" href="${l.url}" target="_blank">${l.title}</a>`
).join("")

})

/* PROJECT */

fetch("data/projects.json")
.then(r=>r.json())
.then(data=>{

projects.innerHTML=data.map(p=>`

<div class="card" onclick='projectPopup(${JSON.stringify(p)})'>

<img loading="lazy" src="${p.cover}">

<p>${p.title}</p>

</div>

`).join("")

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

/* PRODUCTS */

fetch("data/products.json")
.then(r=>r.json())
.then(data=>{

products.innerHTML=data.map(p=>`

<div class="card" onclick='productPopup(${JSON.stringify(p)})'>

<img loading="lazy" src="${p.images[0]}">

<p>${p.title}</p>

</div>

`).join("")

})

function productPopup(p){

let thumbs=p.images.map(i=>

`<img src="${i}" onclick="document.getElementById('main').src='${i}'">`

).join("")

openPopup(`

<h3>${p.title}</h3>

<img id="main" src="${p.images[0]}">

<div class="thumbs">

${thumbs}

</div>

<p>${p.description}</p>

<b>${formatRupiah(p.price)}</b>

<br>

<button class="btn" onclick='addCart(${JSON.stringify(p)})'>Add to Cart</button>

`)

}

/* POSTS */

fetch("data/posts.json")
.then(r=>r.json())
.then(data=>{

posts.innerHTML=data.slice(0,5).map(p=>

`<div class="blog">${p.title}</div>`

).join("")

})

function openCV(){

openPopup(`

<h3>Curriculum Vitae</h3>

<a class="btn" href="cv/cv.pdf">Download CV</a>

`)

}
