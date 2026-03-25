const DATA_URL = "/data/links.json";
let clicks = JSON.parse(localStorage.getItem("clicks") || "{}");

fetch(DATA_URL)
.then(r=>r.json())
.then(data=>{
  initHeader(data.profile);
  renderCountdown(data.promo);
  renderFeatured(data.links);
  renderLinks(data.links);
  renderProducts(data.products);
  renderGallery(data.gallery);
});

/* HEADER */
function initHeader(p){
  name.innerText=p.name;
  bio.innerText=p.bio;
  avatar.src=p.avatar;

  if(p.badge){
    badgeText.innerText=p.badge.text;
    badgeIcon.setAttribute("data-lucide",p.badge.icon);
  }

  lucide.createIcons();
}

/* COUNTDOWN */
function renderCountdown(promo){
  if(!promo) return;
  const el = document.getElementById("countdown");

  setInterval(()=>{
    const t = new Date(promo.end) - new Date();
    if(t<=0){ el.innerText="Promo ended"; return; }

    const h = Math.floor(t/3600000);
    const m = Math.floor((t%3600000)/60000);

    el.innerText = `🔥 ${promo.text} ${h}j ${m}m`;
  },1000);
}

/* FEATURED */
function renderFeatured(links){
  const f = links.find(l=>l.featured);
  if(!f) return;

  const el = document.createElement("a");
  el.href=f.url;
  el.innerText=f.title;

  el.className="block bg-black text-white text-center py-3 rounded-xl mb-3 font-bold";

  el.onclick=()=>track(f.id);

  featured.appendChild(el);
}

/* LINKS */
function renderLinks(links){
  links.forEach(l=>{
    const url = ab(l);

    const el=document.createElement("div");
    el.className="p-3 bg-gray-100 rounded-xl flex justify-between";

    el.innerHTML=`
      <span>${l.title}</span>
      <button onclick="go('${l.id}','${url}')">
        <i data-lucide="arrow-right"></i>
      </button>
    `;

    if(clicks[l.id]>5) el.classList.add("ring-2","ring-black");

    linksContainer=document.getElementById("links");
    linksContainer.appendChild(el);
  });

  lucide.createIcons();
}

function go(id,url){
  track(id);
  window.open(url+"?utm=linkbio","_blank");
}

/* TRACK */
function track(id){
  clicks[id]=(clicks[id]||0)+1;
  localStorage.setItem("clicks",JSON.stringify(clicks));
}

/* AB */
function ab(l){
  if(!l.variants) return l.url;
  return Math.random()>0.5 ? l.variants[0] : l.variants[1];
}

/* PRODUCTS */
function renderProducts(p){
  p.forEach(x=>{
    const el=document.createElement("div");
    el.className="p-3 bg-gray-100 rounded-xl mb-3";

    el.innerHTML=`
      <img src="${x.image}" class="rounded mb-2"/>
      <h3 class="font-bold">${x.title}</h3>
      <p class="text-sm">${x.price}</p>
      <button onclick='openModal(${JSON.stringify(x)})'
        class="bg-black text-white w-full mt-2 py-2 rounded">
        Buy
      </button>
    `;

    products.appendChild(el);
  });
}

function openModal(p){
  modal.classList.remove("hidden");
  modalImg.src=p.image;
  modalTitle.innerText=p.title;
  modalDesc.innerText=p.description;
  modalDemo.href=p.demo;
  modalBuy.href=p.buy;
}

function closeModal(){
  modal.classList.add("hidden");
}

/* GALLERY */
function renderGallery(g){
  g.forEach(img=>{
    const el=document.createElement("img");
    el.src=img;
    el.className="rounded";
    gallery.appendChild(el);
  });
}
