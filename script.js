// WA BUTTON
document.getElementById("waBtn").href =
"https://wa.me/628xxxx?text=Halo saya mau order";

// QRIS
function openQRIS(){ qrisPopup.classList.remove("hidden") }
function closeQRIS(){ qrisPopup.classList.add("hidden") }

// PRODUCT POPUP
function openProduct(p){
  pImage.src = p.images[0];
  pTitle.innerText = p.title;
  pPrice.innerText = "Rp" + p.price;
  pDesc.innerText = p.desc;
  pBuy.href = p.buy;
  productPopup.classList.remove("hidden");
}

function closeProduct(){
  productPopup.classList.add("hidden");
}

// LOAD DATA
fetch("/data/links.json")
.then(res => res.json())
.then(data => {

  // LINKS
  const links = document.getElementById("links");
  data.links.forEach(l => {
    links.innerHTML += `
      <a href="${l.url}" class="block bg-white p-3 rounded-xl shadow">
        ${l.title}
      </a>
    `;
  });

  // PRODUCTS
  const el = document.getElementById("products");

  data.products.forEach(p => {
    el.innerHTML += `
      <div onclick='openProduct(${JSON.stringify(p)})'
      class="min-w-[45%] bg-white rounded-2xl shadow p-2 cursor-pointer">

        <img src="${p.images[0]}" class="w-full aspect-square object-cover rounded-xl" alt="${p.title}">

        <div class="p-1">
          <h3 class="text-sm font-semibold">${p.title}</h3>
          <p class="text-xs text-gray-500">Rp${p.price}</p>
        </div>

      </div>
    `;
  });

  injectSchema(data.products);
});

// PRODUCT SCHEMA
function injectSchema(products){
  const schema = {
    "@context":"https://schema.org",
    "@type":"ItemList",
    "itemListElement": products.map((p,i)=>({
      "@type":"Product",
      "position":i+1,
      "name":p.title,
      "image":p.images[0],
      "description":p.desc,
      "offers":{
        "@type":"Offer",
        "price":p.price,
        "priceCurrency":"IDR"
      }
    }))
  };

  const s=document.createElement("script");
  s.type="application/ld+json";
  s.textContent=JSON.stringify(schema);
  document.head.appendChild(s);
}
