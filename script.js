waBtn.href="https://wa.me/628xxxx";

// LOTTIE
lottie.loadAnimation({
  container: document.getElementById("coverBox"),
  renderer:"svg",
  loop:true,
  autoplay:true,
  path:"/assets/cover.json"
});

// QRIS
function openQRIS(){
  qrisPopup.classList.remove("hidden")
}
function closeQRIS(){
  qrisPopup.classList.add("hidden")
}

// PRODUCT
function openProduct(p){

  pMain.src = p.images[0]
  pTitle.innerText = p.title
  pPrice.innerText = "Rp"+p.price
  pDesc.innerText = p.desc
  pBuy.href = p.buy
  pInfo.href = p.info || "#"

  thumbs.innerHTML=""

  p.images.forEach(img=>{
    thumbs.innerHTML+=`
    <img src="${img}"
    onclick="pMain.src='${img}'"
    class="w-14 h-14 object-cover rounded-lg border">
    `
  })

  productPopup.classList.remove("hidden")
  setTimeout(()=>modalBox.classList.add("show"),10)
}

function closeProduct(){
  modalBox.classList.remove("show")
  setTimeout(()=>productPopup.classList.add("hidden"),200)
}

// LOAD
fetch("/data/links.json")
.then(r=>r.json())
.then(d=>{

d.links.forEach(l=>{
links.innerHTML+=`
<a href="${l.url}"
class="card p-3 flex justify-between items-center btn">
${l.title}
<i data-lucide="arrow-right"></i>
</a>`
})

d.products.forEach(p=>{
products.innerHTML+=`
<div onclick='openProduct(${JSON.stringify(p)})'
class="min-w-[45%] card p-2 btn">

<img src="${p.images[0]}" alt="Produk ${p.title}"
class="w-full aspect-square object-cover rounded-xl">

<h2 class="text-sm font-semibold mt-1">${p.title}</h2>
<p class="text-xs text-gray-500">Rp${p.price}</p>

</div>`
})

d.linksBottom.forEach(l=>{
linksBottom.innerHTML+=`
<a href="${l.url}"
class="card p-3 flex justify-between items-center btn">
${l.title}
<i data-lucide="arrow-right"></i>
</a>`
})

lucide.createIcons()

// AUTO SLIDE
setInterval(()=>{
products.scrollBy({left:150,behavior:"smooth"})
},3000)

})

// SERVICE WORKER
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("/sw.js")
}
