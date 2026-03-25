const API="/data/links.json";

fetch(API).then(r=>r.json()).then(d=>{
 renderFeatured(d.featured);
 renderLinks(d.links);
 renderProducts(d.products);
 renderBlog(d.blog);
});

// FEATURED
function renderFeatured(f){
 if(!f)return;
 featured.innerHTML=`
 <a href="${f.url}" class="block text-center p-4 rounded-2xl text-white font-bold bg-black">
 ${f.title}
 </a>`;
}

// LINKS
function renderLinks(links){
 links.forEach(l=>{
  linksEl.innerHTML+=`
  <a href="${l.url}" class="link block bg-white p-3 rounded-2xl shadow">
  ${l.title}
  </a>`;
 });
}
const linksEl=document.getElementById("links");

// PRODUCTS
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

// BLOG LIST
function renderBlog(list){
 list.forEach(b=>{
  blog.innerHTML+=`
  <a href="${b.url}" target="_blank"
  class="link block bg-white p-3 rounded-2xl shadow text-sm">
    📘 ${b.title}
  </a>`;
 });
}

// PRODUCT MODAL
function openProduct(p){
 productModal.classList.remove("hidden");
 pImg.src=p.img;
 pTitle.innerText=p.title;
 pPrice.innerText=p.price;
}
function closeProduct(){
 productModal.classList.add("hidden");
}

// DONATE
function openDonate(){
 donateModal.classList.remove("hidden");
}
function closeDonate(){
 donateModal.classList.add("hidden");
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
