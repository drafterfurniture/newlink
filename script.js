let cart=[];

fetch("/data/links.json").then(r=>r.json()).then(d=>{
 renderFeatured(d.featured);
 renderLinks(d.links);
 renderProducts(d.products);
 renderBlog(d.blog);
});

/* FEATURE */
function renderFeatured(f){
 featured.innerHTML=`<a href="${f.url}" class="btn wa">${f.title}</a>`;
}

/* LINKS */
function renderLinks(links){
 links.forEach(l=>{
  linksEl.innerHTML+=`
  <a href="${l.url}" class="btn">
    ${l.title}
    <i data-lucide="sparkles"></i>
  </a>`;
 });
}

/* PRODUCTS */
function renderProducts(p){
 p.forEach(i=>{
  products.innerHTML+=`
  <div class="bg-white rounded-xl p-2">
    <img src="${i.img}" class="rounded-lg">
    <h3>${i.title}</h3>
    <p>${i.price}</p>

    <div class="flex gap-2 mt-2">
      <button onclick='openModal(${JSON.stringify(i)})' class="flex-1 border rounded-lg p-2">View</button>
      <button onclick='addCart("${i.title}")' class="flex-1 bg-green-500 text-white rounded-lg p-2">Add</button>
    </div>
  </div>`;
 });
}

/* BLOG */
function renderBlog(list){
 list.forEach(b=>{
  blog.innerHTML+=`
  <a href="${b.url}" class="btn">
    ${b.title}
    <i data-lucide="book-open"></i>
  </a>`;
 });
}

/* DONATE */
function openDonate(){donateModal.classList.remove("hidden")}
function closeDonate(){donateModal.classList.add("hidden")}

/* PRODUCT */
let currentItem=null;
function openModal(p){
 currentItem=p;
 modal.classList.remove("hidden");
 mTitle.innerText=p.title;
 mImg.src=p.img;
 mPrice.innerText=p.price;
}
function closeModal(){modal.classList.add("hidden")}

function addCart(title){
 cart.push(title);
 updateCart();
}
function addCartModal(){
 cart.push(currentItem.title);
 updateCart();
}

/* CART */
function updateCart(){
 cartCount.innerText=cart.length;
 cartCount.classList.remove("hidden");
}

function openCart(){
 cartModal.classList.remove("hidden");
 cartList.innerHTML=cart.map(i=>`• ${i}`).join("<br>");
}

function closeCart(){
 cartModal.classList.add("hidden");
}

function checkout(){
 let text=cart.map(i=>"- "+i).join("%0A");
 window.open(`https://wa.me/628xxxx?text=Order:%0A${text}`);
}

lucide.createIcons();
