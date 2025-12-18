let cart = [];
let totalAmount = 0;

function addToCart(itemName, price) {

  cart.push({ name: itemName, price: price });

  totalAmount += price;

  document.querySelector(".cart").classList.add("active");


  let itemText = cart.map(item => item.name).join(", ");
  document.getElementById("itemshower").innerText = itemText;


  document.getElementById("total").innerText = "Total ₹" + totalAmount;
}

document.getElementById('order').addEventListener("click",(event)=>{
    event.preventDefault()
    window.alert("Your Order Placed !!!")
})
console.log(total)
