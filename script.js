const DATA_URL = "/data/links.json";
let clicks = JSON.parse(localStorage.getItem("clicks") || "{}");

fetch(DATA_URL)
  .then(res => res.json())
  .then(data => {
    initProfile(data.profile);
    renderFeatured(data.links);
    renderLinks(data.links);
    renderProducts(data.products);
    renderGallery(data.gallery);
  });

function initProfile(profile) {
  document.getElementById("name").innerText = profile.name;
  document.getElementById("bio").innerText = profile.bio;
}

/* FEATURED LINK */
function renderFeatured(links) {
  const f = links.find(l => l.featured);
  if (!f) return;

  const el = document.createElement("a");
  el.href = f.url;
  el.innerText = f.title;

  el.className =
    "block bg-black text-white text-center py-3 rounded-xl font-bold mb-3";

  trackClick(f.id);
  document.getElementById("featured").appendChild(el);
}

/* LINKS */
function renderLinks(links) {
  const container = document.getElementById("links");

  links.forEach(link => {
    const finalUrl = abTest(link);

    const el = document.createElement("div");
    el.className =
      "p-3 bg-gray-100 rounded-xl flex justify-between items-center hover:bg-gray-200 transition";

    el.innerHTML = `
      <span>${link.title}</span>
      <button onclick="handleClick('${link.id}', '${finalUrl}')">
        <i data-lucide="arrow-right"></i>
      </button>
    `;

    if (isPopular(link.id)) {
      el.classList.add("ring-2", "ring-black");
    }

    container.appendChild(el);
  });

  lucide.createIcons();
}

function handleClick(id, url) {
  trackClick(id);
  window.open(addUTM(url), "_blank");
}

/* TRACKING */
function trackClick(id) {
  clicks[id] = (clicks[id] || 0) + 1;
  localStorage.setItem("clicks", JSON.stringify(clicks));
}

function isPopular(id) {
  return clicks[id] > 5;
}

/* A/B TEST */
function abTest(link) {
  if (!link.variants) return link.url;
  return Math.random() > 0.5 ? link.variants[0] : link.variants[1];
}

/* UTM */
function addUTM(url) {
  return url + "?utm_source=linkbio";
}

/* PRODUCTS */
function renderProducts(products) {
  const container = document.getElementById("products");

  products.forEach(p => {
    const el = document.createElement("div");
    el.className = "p-3 bg-gray-100 rounded-xl mb-3";

    el.innerHTML = `
      <img src="${p.image}" loading="lazy" class="rounded mb-2"/>
      <h3 class="font-bold">${p.title}</h3>
      <p class="text-sm text-gray-500">${p.price}</p>
      <button onclick='openModal(${JSON.stringify(p)})'
        class="mt-2 bg-black text-white w-full py-2 rounded">
        Buy
      </button>
    `;

    container.appendChild(el);
  });
}

/* MODAL */
function openModal(p) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modalImg").src = p.image;
  document.getElementById("modalTitle").innerText = p.title;
  document.getElementById("modalDesc").innerText = p.description;
  document.getElementById("modalDemo").href = p.demo;
  document.getElementById("modalBuy").href = p.buy;
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

/* GALLERY */
function renderGallery(gallery) {
  const container = document.getElementById("gallery");

  gallery.forEach(img => {
    const el = document.createElement("img");
    el.src = img;
    el.loading = "lazy";
    el.className = "rounded-lg";

    container.appendChild(el);
  });
}
