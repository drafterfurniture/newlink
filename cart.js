let cart = JSON.parse(localStorage.getItem("cart") || "[]")

function addCart(product){

cart.push(product)

localStorage.setItem("cart",JSON.stringify(cart))

alert("ditambahkan ke cart")

}

function openCart(){

let html=""
let total=0

cart.forEach(i=>{

total+=i.price

html+=`<p>${i.title} - Rp ${i.price}</p>`

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

<b>Total : Rp ${total}</b>

<br><br>

<a class="btn" href="https://wa.me/628XXXX?text=${text}">Checkout WhatsApp</a>

`)

}
