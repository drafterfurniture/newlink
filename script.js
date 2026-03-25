const API = "/data/links.json";
let clicks = JSON.parse(localStorage.getItem("clicks") || "{}");

fetch(API).then(r=>r.json()).then(d=>{
 renderFeatured(d.featured);
 renderLinks(d.links);
 renderProducts(d.products);
 renderGallery(d.gallery);
 renderSocial(d.social);
});

function track(id){
 clicks[id]=(clicks[id]||0)+1;
 localStorage.setItem("clicks",JSON.stringify(clicks));
}

function renderFeatured(f){
 if(!f)return;
 featured.innerHTML=`
 <a href="${f.url}" onclick="track('${f.id}')" 
 class="block text-center p-4 rounded-2xl text-white font-bold gradient shadow-lg">
 ${f.title}
 </a>`;
}

function renderLinks(links){
 links.forEach(l=>{
 const hot=clicks[l.id]>3?"ring-2 ring-green-400":"";
 linksEl.innerHTML+=`
 <a href="${ab(l)}" onclick="track('${l.id}')"
 class="block glass p-3 rounded-2xl shadow ${hot} hover:scale-[1.02] transition">
 ${l.title}
 </a>`;
 });
}

const linksEl=document.getElementById("links");

function ab(l){
 if(!l.variants)return l.url;
 return l.variants[Math.floor(Math.random()*l.variants.length)];
}

function renderProducts(p){
 p.forEach(i=>{
 products.innerHTML+=`
 <div onclick='openModal(${JSON.stringify(i)})'
 class="glass p-3 rounded-2xl shadow mb-3 hover:scale-[1.02] transition">
 <img src="${i.img}" class="rounded-lg mb-2" loading="lazy">
 <h3 class="font-semibold">${i.title}</h3>
 <p class="text-sm text-gray-500">${i.price}</p>
 </div>`;
 });
}

function openModal(p){
 modal.classList.remove("hidden");
 modalImg.src=p.img;
 modalTitle.innerText=p.title;
 modalDesc.innerText=p.desc;
 modalBuy.href=p.url;
}

function closeModal(){modal.classList.add("hidden")}

function renderGallery(g){
 g.forEach(i=>gallery.innerHTML+=`<img src="${i}" loading="lazy" class="rounded-xl">`);
}

function renderSocial(s){
 s.forEach(i=>social.innerHTML+=`<a href="${i.url}"><i data-lucide="${i.icon}"></i></a>`);
 lucide.createIcons();
}

if("serviceWorker" in navigator){navigator.serviceWorker.register("/sw.js");}
