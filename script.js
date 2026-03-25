const API="/data/links.json";

fetch(API).then(r=>r.json()).then(d=>{
 renderFeatured(d.featured);
 renderLinks(d.links);
 renderProducts(d.products);
 renderBlog(d.blog);
});

function renderFeatured(f){
 featured.innerHTML=`
 <a href="${f.url}" class="btn wa">
 ${f.title}
 </a>`;
}

function renderLinks(links){
 links.forEach(l=>{
  linksEl.innerHTML+=`
  <a href="${l.url}" class="glass btn">
   ${l.title}
  </a>`;
 });
}
const linksEl=document.getElementById("links");

// 🔥 PRODUCT CAROUSEL STYLE
function renderProducts(p){
 p.forEach(i=>{
  products.innerHTML+=`
  <div class="glass product-card p-3">
    <img src="${i.img}" class="rounded-lg mb-2">
    <h3 class="font-medium">${i.title}</h3>
    <p class="text-sm text-gray-500">${i.price}</p>

    <div class="mt-3 flex gap-2">
      <button class="btn glass flex-1 text-xs">View</button>
      <button class="btn wa flex-1 text-xs">Buy</button>
    </div>
  </div>`;
 });
}

function renderBlog(list){
 list.forEach(b=>{
  blog.innerHTML+=`
  <a href="${b.url}" class="glass btn">
   ${b.title}
  </a>`;
 });
}

// DONATE
function openDonate(){donateModal.classList.remove("hidden")}
function closeDonate(){donateModal.classList.add("hidden")}

// LOTTIE
lottie.loadAnimation({
 container: document.getElementById('lottie-cover'),
 renderer:'svg',
 loop:true,
 autoplay:true,
 path:'/assets/cover.json'
});

lucide.createIcons();
