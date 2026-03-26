🚀 Customin Link Bio Store

Template Link-in-Bio modern + siap jualan
Ringan, cepat, dan bisa langsung dipakai untuk jualan produk + portfolio + affiliate + donasi (QRIS).

---

✨ Keunggulan

- ⚡ Super ringan & cepat (tanpa framework berat)
- 🎯 Fokus konversi (UI clean & CTA jelas)
- 📱 Mobile-first (optimal di HP)
- 🧠 Struktur simpel (mudah dimodif)
- 🔥 Siap jualan (produk + popup detail)
- 💸 Support donasi QRIS
- 🎨 UI modern (gradient + glass effect)
- 🧩 Mudah diintegrasi (Cloudflare Pages / GitHub Pages)

---

🚀 Fitur

🧾 Link Management

- Link atas & bawah (dinamis dari JSON)
- Icon otomatis (Lucide)
- UI clickable + smooth

🛍️ Product Showcase

- Scroll horizontal
- Popup detail produk
- Multi gambar + thumbnail
- Tombol Info & Beli

💬 WhatsApp CTA

- Direct chat ke WhatsApp
- Bisa dipakai untuk closing

💸 Donasi QRIS

- Popup QRIS
- UX clean (modal blur)

🎨 UI & UX

- Gradient animated
- Glassmorphism card
- Smooth animation
- Auto slide produk

⚙️ Performance

- Lazy load image
- RequestIdleCallback
- No heavy JS framework
- Service Worker ready

---

📦 Struktur Project

/assets
/data
  links.json
index.html
script.js
output.css
sw.js
manifest.json

---

🛠️ Cara Install

1. Clone / Download

git clone https://github.com/username/repo.git

---

2. Edit Data

Buka:

/data/links.json

Contoh:

{
  "links":[
    {"title":"Chat via WhatsApp","url":"https://wa.me/628xxxx"}
  ],
  "products":[
    {
      "title":"Template Link Bio",
      "price":"99000",
      "images":["/assets/p1.jpg"],
      "desc":"Template premium siap jual",
      "buy":"https://wa.me/628xxxx",
      "info":"#"
    }
  ]
}

---

3. Edit WhatsApp

Di "script.js":

waBtn.href = "https://wa.me/628xxxx";

---

4. Deploy

🔹 Cloudflare Pages

- Upload repo
- Set:
  - Build command: (kosong)
  - Output: "/"

🔹 GitHub Pages

- Settings → Pages
- Deploy from branch

---

🎨 Customisasi

Ganti Warna

Edit di "index.html":

.gradient-anim{
  background:linear-gradient(120deg,#fef08a,#fde047,#facc15,#eab308);
}

---

Ganti Cover Animation

/assets/cover.json

(Bisa pakai Lottie file sendiri)

---

Ganti Avatar

/assets/avatar.jpg

---

⚡ Tips Performance

- Gunakan format .webp untuk gambar
- Resize gambar max 800px
- Jangan terlalu banyak produk (>10)
- Pakai Lottie ukuran kecil (<100KB)

---

🔒 Optional Upgrade

- Cart + Checkout WA
- Tracking klik (analytics)
- Multi bahasa
- Payment gateway
- CMS (headless)

---

💡 Use Case

- Link bio Instagram
- Landing page jualan
- Affiliate tools
- Portfolio
- Digital product store

---

🧠 Filosofi

«Simple > ribet
Cepat > berat
Cuan > gaya»

---

🤝 Kontribusi

Pull request welcome 🚀

---

📄 License

Copyright (c) 2026 Customin

---

🆓 Penggunaan Pribadi

Template ini gratis digunakan untuk keperluan pribadi, termasuk:

- Link bio pribadi
- Portfolio
- Landing page personal

---

💼 Penggunaan Komersial

Diizinkan menggunakan template ini untuk:

- Project client
- Website bisnis
- Jasa pembuatan website
- Agency / freelancer

---

❌ Pembatasan

Anda TIDAK diperbolehkan untuk:

- Menjual ulang template ini (resell)
- Mengklaim sebagai karya sendiri tanpa modifikasi berarti
- Mendistribusikan ulang sebagai produk (gratis maupun berbayar)

---

⚠️ Catatan

Jika ingin menjual ulang template ini, silakan hubungi pemilik untuk lisensi khusus.

---

🤝 Kredit

Tidak wajib, tapi sangat diapresiasi jika mencantumkan:

«Built with Customin»

---

📩 Kontak

Untuk lisensi tambahan / kerja sama:
customin.co@gmail.com
