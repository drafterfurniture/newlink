const API="/data/links.json";
let clicks=JSON.parse(localStorage.getItem("clicks")||"{}");

// load data
fetch(API).then(r=>r.json()).then(d=>{
 renderFeatured(d.featured);
 renderLinks(d.links);
 renderProducts(d.products);
});

// tracking
function track(id){
 clicks[id]=(clicks[id]||0)+1;
 localStorage.setItem("clicks",JSON.stringify(clicks));
}

// featured
function renderFeatured(f){
 if(!f)return;
 featured.innerHTML=`
 <a href="${f.url}" onclick="track('${f.id}')"
 class="block text-center p-4 rounded-2xl text-white font-bold bg-black">
 ${f.title}
 </a>`;
}

// links
function renderLinks(links){
 links.forEach(l=>{
  const hot=clicks[l.id]>3?"ring-2 ring-yellow-400":"";
  document.getElementById("links").innerHTML+=`
  <a href="${ab(l)}" onclick="track('${l.id}')"
  class="link block bg-white p-3 rounded-2xl shadow ${hot}">
  ${l.title}
  </a>`;
 });
}

// ab testing
function ab(l){
 if(!l.variants)return l.url;
 return l.variants[Math.floor(Math.random()*l.variants.length)];
}

// products
function renderProducts(p){
 p.forEach(i=>{
  products.innerHTML+=`
  <div class="product bg-white p-3 rounded-2xl shadow mb-3">
  <img src="${i.img}" class="rounded-lg mb-2" loading="lazy">
  <h3>${i.title}</h3>
  <p>${i.price}</p>
  </div>`;
 });
}

// countdown
function startCountdown(){
 const end=new Date().getTime()+3600*1000;
 setInterval(()=>{
  const now=new Date().getTime();
  const d=end-now;
  if(d<0)return;
  const m=Math.floor(d/60000);
  const s=Math.floor((d%60000)/1000);
  document.getElementById("countdown").innerText=`Promo ${m}m ${s}s`;
 },1000);
}
startCountdown();

// LOTTIE INTERACTIVE
let anim;
window.addEventListener("DOMContentLoaded",()=>{
 anim=lottie.loadAnimation({
  container: document.getElementById('lottie-cover'),
  renderer:'svg',
  loop:true,
  autoplay:true,
  path:'/assets/cover.json'
 });

 // scroll speed
 window.addEventListener("scroll",()=>{
  const s=window.scrollY;
  anim.setSpeed(1 + s/500);
 });

 // hover
 const cover=document.getElementById("lottie-cover");
 cover.addEventListener("mouseenter",()=>anim.setSpeed(2));
 cover.addEventListener("mouseleave",()=>anim.setSpeed(1));
});

lucide.createIcons();
