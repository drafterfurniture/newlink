let cart = JSON.parse(localStorage.getItem("cart") || "[]")

function addCart(p){

cart.push(p)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Produk ditambahkan")

}

function openCart(){

let html=""
let total=0

cart.forEach(i=>{

total+=i.price

html+=`<p>${i.title} - ${formatRupiah(i.price)}</p>`

})

let text="Order:%0A"

cart.forEach(i=>{
text+=`${i.title} - ${i.price}%0A`
})

text+=`Total ${total}`

openPopup(`

<h3>Cart</h3>

${html}

<br>

<b>Total : ${formatRupiah(total)}</b>

<br><br>

<a class="btn" href="https://wa.me/628XXXX?text=${text}">Checkout WhatsApp</a>

`)

}
