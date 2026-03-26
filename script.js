// WA
waBtn.href="https://wa.me/628xxxx?text=Halo saya mau order";

// COVER JSON (FIXED PATH)
fetch("/assets/cover.json")
.then(r=>r.json())
.then(c=>{
  if(c.type==="image"){
    coverBox.innerHTML = `
      <img src="${c.src}"
      class="w-full h-full object-cover"
      alt="cover">
    `
  }
})
.catch(()=>{
  coverBox.innerHTML = `
  <div class="w-full h-full bg-gradient-to-r from-sky-200 to-blue-300"></div>
  `
})

// QRIS
function openQRIS(){qrisPopup.classList.remove("hidden")}
function closeQRIS(){qrisPopup.classList.add("hidden")}

// PRODUCT POPUP
function openProduct(p){
  pMain.src=p.images[0]
  pTitle.innerText=p.title
  pPrice.innerText="Rp"+p.price
  pDesc.innerText=p.desc
  pBuy.href=p.buy
  pInfo.href=p.info||"#"

  thumbs.innerHTML=""

  p.images.forEach(img=>{
    thumbs.innerHTML+=`
    <img src="${img}"
    onclick="pMain.src='${img}'"
    class="w-14 h-14 object-cover rounded-lg cursor-pointer">
    `
  })

  productPopup.classList.remove("hidden")
}

function closeProduct(){
  productPopup.classList.add("hidden")
}

// LOAD DATA
fetch("/data/links.json")
.then(r=>r.json())
.then(d=>{

// LINKS ATAS
d.links.forEach(l=>{
links.innerHTML+=`
<a href="${l.url}"
class="glass p-3 rounded-xl flex justify-between items-center">
<span class="flex gap-2 items-center">
<i data-lucide="${l.icon||'link'}"></i> ${l.title}
</span>
<i data-lucide="arrow-right"></i>
</a>`
})

// PRODUCTS
d.products.forEach(p=>{
products.innerHTML+=`
<div onclick='openProduct(${JSON.stringify(p)})'
class="min-w-[45%] glass rounded-2xl p-2 cursor-pointer">

<img src="${p.images[0]}"
class="w-full aspect-square object-cover rounded-xl"
alt="${p.title}">

<h3 class="text-sm font-semibold mt-1">${p.title}</h3>
<p class="text-xs text-gray-500">Rp${p.price}</p>

</div>`
})

// LINKS BAWAH
d.links.forEach(l=>{
linksBottom.innerHTML+=`
<a href="${l.url}"
class="glass p-3 rounded-xl flex justify-between">
${l.title}
</a>`
})

lucide.createIcons()

})
