let cart=0;

fetch("/data/links.json").then(r=>r.json()).then(d=>{
 renderFeatured(d.featured);
 renderLinks(d.links);
 renderProducts(d.products);
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
  <a href="${l.url}" class="btn bg-white">
    ${l.title}
    🐱
  </a>`;
 });
}
const linksEl=document.getElementById("links");

function renderProducts(p){
 p.forEach(i=>{
  products.innerHTML+=`
  <div class="product">
    <img src="${i.img}" class="rounded-lg">
    <h3>${i.title}</h3>
    <p>${i.price}</p>

    <div class="flex gap-2 mt-2">
      <button onclick='openModal(${JSON.stringify(i)})' class="flex-1 border rounded-lg p-2">View</button>
      <button onclick="addCart()" class="flex-1 bg-green-500 text-white rounded-lg p-2">Add</button>
    </div>
  </div>`;
 });
}

function openModal(p){
 modal.classList.remove("hidden");
 mTitle.innerText=p.title;
 mImg.src=p.img;
 mPrice.innerText=p.price;
 mDesc.innerText="Produk premium berkualitas";

 thumbs.innerHTML="";
 if(p.gallery){
  p.gallery.forEach(img=>{
   thumbs.innerHTML+=`<img src="${img}" onclick="mImg.src='${img}'" class="w-16 rounded">`;
  });
 }
}

function addCart(){
 cart++;
 cartCount.innerText=cart;
 cart.classList.remove("hidden");
}

document.getElementById("cart").onclick=()=>{
 window.open("https://wa.me/628xxxx?text=Checkout "+cart+" item");
};
