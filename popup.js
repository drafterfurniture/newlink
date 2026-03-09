const popup = document.getElementById("popup")

function openPopup(html){

popup.innerHTML = `<div class="popup-box">${html}</div>`

popup.style.display="flex"

}

popup.onclick = e=>{
if(e.target===popup) popup.style.display="none"
}
