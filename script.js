const DATA_URL = "/data/links.json";
let clicks = JSON.parse(localStorage.getItem("clicks") || "{}");

fetch(DATA_URL)
.then(r=>r.json())
.then(data=>{
  initHeader(data.profile);
  renderFeatured(data.links);
  renderLinks(data.links);
  renderProducts(data.products);
  renderGallery(data.gallery);
});

/* HEADER */
function initHeader(p){
  document.getElementById("bio").innerText = p.bio;
  document.getElementById("avatar").src = p.avatar;

  if(p.badge){
    document.getElementById("badgeText").innerText = p.badge.text;
    document.getElementById("badgeIcon")
      .setAttribute("data-lucide", p.badge.icon || "zap");
  }

  lucide.createIcons();
}

/* FEATURED */
function renderFeatured(links){
  const f = links.find(l=>l.featured);
  if(!f) return;

  const el=document.createElement("a");
  el.href=f.url;
  el.innerText=f.title;

  el.className="block bg-black text-white text-center py-3 rounded-xl mb-3 font-bold";

  el.onclick=()=>track(f.id);

  featured.appendChild(el);
}

/* LINKS */
function renderLinks(links){
  const container=document.getElementById("links");

  links.forEach(l=>{
    const url = ab(l);

    const el=document.createElement("div");
    el.className="p-3 bg-gray-100 rounded-xl flex justify-between items-center";

    el.innerHTML=`
      <span>${l.title}</span>
      <button onclick="go('${l.id}','${url}')">
        <i data-lucide="arrow-right"></i>
      </button>
    `;

    if(clicks[l.id]>5){
      el.classList.add("ring-2","ring-black");
    }

    container.appendChild(el);
  });

  lucide.createIcons();
}

function go(id,url){
  track(id);
  window.open(url+"?utm_source=linkbio","_blank");
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
  const container=document.getElementById("products");

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

    container.appendChild(el);
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
  const container=document.getElementById("gallery");

  g.forEach(img=>{
    const el=document.createElement("img");
    el.src=img;
    el.className="rounded";
    container.appendChild(el);
  });
}
