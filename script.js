const API = "/data/links.json";
let clicks = JSON.parse(localStorage.getItem("clicks") || "{}");

fetch(API)
.then(res => res.json())
.then(data => {
 renderFeatured(data.featured);
 renderLinks(data.links);
 renderProducts(data.products);
 renderGallery(data.gallery);
 renderSocial(data.social);
});

function track(id){
 clicks[id] = (clicks[id] || 0) + 1;
 localStorage.setItem("clicks", JSON.stringify(clicks));
}

function renderFeatured(item){
 if(!item) return;
 document.getElementById("featured").innerHTML = `
 <a href="${item.url}" onclick="track('${item.id}')" class="block p-4 bg-black text-white rounded-xl text-center font-bold">
 ${item.title}
 </a>`;
}

function renderLinks(links){
 const el = document.getElementById("links");
 links.forEach(l=>{
 const popular = clicks[l.id] > 3 ? "border-2 border-green-500" : "";
 el.innerHTML += `
 <a href="${abTest(l)}" onclick="track('${l.id}')" class="block p-3 bg-white rounded-xl shadow ${popular}">
 ${l.title}
 </a>`;
 });
}

function abTest(link){
 if(!link.variants) return link.url;
 const i = Math.floor(Math.random()*link.variants.length);
 return link.variants[i];
}

function renderProducts(products){
 const el = document.getElementById("products");
 products.forEach(p=>{
 el.innerHTML += `
 <div onclick="openModal(${JSON.stringify(p)})" class="bg-white p-3 rounded-xl shadow mb-3">
 <img src="${p.img}" loading="lazy" class="rounded-lg mb-2" />
 <h3>${p.title}</h3>
 <p>${p.price}</p>
 </div>`;
 });
}

function openModal(p){
 document.getElementById("modal").classList.remove("hidden");
 modalImg.src = p.img;
 modalTitle.innerText = p.title;
 modalDesc.innerText = p.desc;
 modalBuy.href = p.url;
}

function closeModal(){
 document.getElementById("modal").classList.add("hidden");
}

function renderGallery(g){
 const el = document.getElementById("gallery");
 g.forEach(i=>{
 el.innerHTML += `<img src="${i}" loading="lazy" class="rounded-lg"/>`;
 });
}

function renderSocial(s){
 const el = document.getElementById("social");
 s.forEach(i=>{
 el.innerHTML += `<a href="${i.url}"><i data-lucide="${i.icon}"></i></a>`;
 });
 lucide.createIcons();
}

// PWA
if("serviceWorker" in navigator){
 navigator.serviceWorker.register("/sw.js");
}
