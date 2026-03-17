// markdown
fetch("content.md")
  .then(r => r.text())
  .then(md => {
    document.getElementById("content").innerHTML = marked.parse(md);
  });

// gallery
fetch("projects.json")
  .then(r => r.json())
  .then(data => {
    const g = document.getElementById("gallery");

    data.forEach(p => {
      const img = document.createElement("img");
      img.src = p.images[0];
      img.alt = p.alt;
      img.loading = "lazy";

      img.onclick = () => openPopup(p);

      g.appendChild(img);
    });
  });

// popup
function openPopup(p) {
  document.getElementById("popup-img").src = p.images[0];
  document.getElementById("popup-title").innerText = p.title;
  document.getElementById("popup-desc").innerText = p.desc;
  document.getElementById("popup-demo").href = p.demo;
  document.getElementById("popup-buy").href = p.buy;

  document.getElementById("popup").classList.remove("hidden");
}

document.getElementById("close").onclick = () => {
  document.getElementById("popup").classList.add("hidden");
};
