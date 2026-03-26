const CACHE="app-v1"

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE).then(c=>c.addAll([
"/",
"/index.html",
"/script.js",
"/data/links.json"
]))
)
})

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
)
})
