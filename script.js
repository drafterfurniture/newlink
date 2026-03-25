const API="/data/links.json";
let clicks=JSON.parse(localStorage.getItem("clicks")||"{}");

fetch(API).then(r=>r.json()).then(d=>{
 renderFeatured(d.featured);
 renderLinks(d.links);
 renderProducts(d.products);
});

// featured
function renderFeatured(f){
 if(!f)return;
 featured.innerHTML=`
 <a href="${f.url}" class="block text-center p-4 rounded-2xl text-white font-bold bg-black">
 ${f.title}
 </a>`;
}

// links
function renderLinks(links){
 links.forEach(l=>{
  document.getElementById("links").innerHTML+=`
  <a href="${l.url}" class="link block bg-white p-3 rounded-2xl shadow">
  ${l.title}
  </a>`;
 });
}

// products (GRID + MODAL)
function renderProducts(p){
 p.forEach(i=>{
  products.innerHTML+=`
  <div onclick='openProduct(${JSON.stringify(i)})'
  class="product bg-white p-2 rounded-2xl shadow text-sm">
    <img src="${i.img}" class="rounded-lg mb-1">
    <h3>${i.title}</h3>
    <p>${i.price}</p>
  </div>`;
 });
}

function openProduct(p){
 document.getElementById("productModal").classList.remove("hidden");
 pImg.src=p.img;
 pTitle.innerText=p.title;
 pPrice.innerText=p.price;
}
function closeProduct(){
 document.getElementById("productModal").classList.add("hidden");
}

// donate
function openDonate(){
 document.getElementById("donateModal").classList.remove("hidden");
}
function closeDonate(){
 document.getElementById("donateModal").classList.add("hidden");
}

// LOTTIE
lottie.loadAnimation({
 container: document.getElementById('lottie-cover'),
 renderer:'svg',
 loop:true,
 autoplay:true,
 path:'/assets/cover.json'
});

lucide.createIcons();
