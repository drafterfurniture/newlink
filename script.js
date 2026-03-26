// =======================
// CONFIG
// =======================
const waBtn = document.getElementById("waBtn");
const links = document.getElementById("links");
const linksBottom = document.getElementById("linksBottom");
const products = document.getElementById("products");

const qrisPopup = document.getElementById("qrisPopup");
const productPopup = document.getElementById("productPopup");
const modalBox = document.getElementById("modalBox");

const pMain = document.getElementById("pMain");
const pTitle = document.getElementById("pTitle");
const pPrice = document.getElementById("pPrice");
const pDesc = document.getElementById("pDesc");
const pBuy = document.getElementById("pBuy");
const pInfo = document.getElementById("pInfo");
const thumbs = document.getElementById("thumbs");

// =======================
// WA
// =======================
waBtn.href = "https://wa.me/628xxxx";

// =======================
// QRIS
// =======================
function openQRIS(){
  qrisPopup.classList.remove("hidden");
}
function closeQRIS(){
  qrisPopup.classList.add("hidden");
}

// =======================
// PRODUCT POPUP
// =======================
function openProduct(p){

  pMain.src = p.images[0];
  pTitle.textContent = p.title;
  pPrice.textContent = "Rp" + p.price;
  pDesc.textContent = p.desc;
  pBuy.href = p.buy;
  pInfo.href = p.info || "#";

  // thumbs
  thumbs.innerHTML = "";
  const frag = document.createDocumentFragment();

  p.images.forEach(img=>{
    const el = document.createElement("img");
    el.src = img;
    el.loading = "lazy";
    el.className = "w-14 h-14 object-cover rounded-lg border cursor-pointer";

    el.onclick = () => pMain.src = img;

    frag.appendChild(el);
  });

  thumbs.appendChild(frag);

  productPopup.classList.remove("hidden");
  setTimeout(()=>modalBox.classList.add("show"),10);
}

function closeProduct(){
  modalBox.classList.remove("show");
  setTimeout(()=>productPopup.classList.add("hidden"),200);
}

// =======================
// LOAD DATA
// =======================
async function init(){

  try{
    const res = await fetch("/data/links.json");
    const d = await res.json();

    // ================= LINKS ATAS =================
    const fragLinks = document.createDocumentFragment();

    d.links.forEach(l=>{
      const a = document.createElement("a");
      a.href = l.url;

      // 🔥 UPDATED CLASS
      a.className = "link-card p-3 flex justify-between items-center btn";

      a.innerHTML = `
        <span>${l.title}</span>
        <i data-lucide="arrow-right"></i>
      `;

      fragLinks.appendChild(a);
    });

    links.appendChild(fragLinks);

    // ================= PRODUCTS =================
    const fragProducts = document.createDocumentFragment();

    d.products.forEach(p=>{
      const div = document.createElement("div");

      // 🔥 UPDATED CLASS
      div.className = "product-card min-w-[45%] p-2 btn";
      div.onclick = () => openProduct(p);

      div.innerHTML = `
        <img src="${p.images[0]}"
        alt="Produk ${p.title}"
        loading="lazy"
        class="w-full aspect-square object-cover rounded-xl">

        <h2 class="text-sm font-semibold mt-1">${p.title}</h2>
        <p class="text-xs text-gray-500">Rp${p.price}</p>
      `;

      fragProducts.appendChild(div);
    });

    products.appendChild(fragProducts);

    // ================= LINKS BAWAH =================
    const fragBottom = document.createDocumentFragment();

    d.linksBottom.forEach(l=>{
      const a = document.createElement("a");
      a.href = l.url;

      // 🔥 UPDATED CLASS
      a.className = "link-card p-3 flex justify-between items-center btn";

      a.innerHTML = `
        <span>${l.title}</span>
        <i data-lucide="arrow-right"></i>
      `;

      fragBottom.appendChild(a);
    });

    linksBottom.appendChild(fragBottom);

    // ================= ICON RENDER =================
    requestIdleCallback(()=>{
      if(window.lucide){
        lucide.createIcons();
      }
    });

    // ================= AUTO SLIDE =================
    let autoSlide = setInterval(()=>{
      products.scrollBy({
        left:150,
        behavior:"smooth"
      });
    },3000);

    // stop kalau user interaksi
    ["touchstart","mouseenter","wheel"].forEach(evt=>{
      products.addEventListener(evt,()=>clearInterval(autoSlide),{once:true});
    });

  }catch(err){
    console.error("Load error:", err);
  }

}

init();

// =======================
// SERVICE WORKER
// =======================
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js");
}
