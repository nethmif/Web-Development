//Image of each product
//product_1
var ProductImg1 = document.getElementById("productImg1");
var SmallImg1 = document.getElementsByClassName("small-img1");

SmallImg1[0].onclick = function()
{
    ProductImg1.src = SmallImg1[0].src;
}
SmallImg1[1].onclick = function()
{
    ProductImg1.src = SmallImg1[1].src;
}
SmallImg1[2].onclick = function()
{
    ProductImg1.src = SmallImg1[2].src;
}
SmallImg1[3].onclick = function()
{
    ProductImg1.src = SmallImg1[3].src;
}

//product_2
var ProductImg2 = document.getElementById("productImg2");
var SmallImg2 = document.getElementsByClassName("small-img2");

SmallImg2[0].onclick = function()
{
    ProductImg2.src = SmallImg2[0].src;
}
SmallImg2[1].onclick = function()
{
    ProductImg2.src = SmallImg2[1].src;
}
SmallImg2[2].onclick = function()
{
    ProductImg2.src = SmallImg2[2].src;
}
SmallImg2[3].onclick = function()
{
    ProductImg2.src = SmallImg2[3].src;
}

//product_3
var ProductImg3 = document.getElementById("productImg3");
var SmallImg3 = document.getElementsByClassName("small-img3");

SmallImg3[0].onclick = function()
{
    ProductImg3.src = SmallImg3[0].src;
}
SmallImg3[1].onclick = function()
{
    ProductImg3.src = SmallImg3[1].src;
}
SmallImg3[2].onclick = function()
{
    ProductImg3.src = SmallImg3[2].src;
}
SmallImg3[3].onclick = function()
{
    ProductImg3.src = SmallImg3[3].src;
}

//product_4
var ProductImg4 = document.getElementById("productImg4");
var SmallImg4 = document.getElementsByClassName("small-img4");

SmallImg4[0].onclick = function()
{
    ProductImg4.src = SmallImg4[0].src;
}
SmallImg4[1].onclick = function()
{
    ProductImg4.src = SmallImg4[1].src;
}
SmallImg4[2].onclick = function()
{
    ProductImg4.src = SmallImg4[2].src;
}
SmallImg4[3].onclick = function()
{
    ProductImg4.src = SmallImg4[3].src;
}

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

//Cart
function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

//Remove cart item
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

//Change quantity of item
function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

//Add item to cart
function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}


function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

//Update cart total
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total

    //update Check out amount
    document.getElementsByClassName('cart-total-amount')[0].innerText = '$' + total
}

function Validation(myFormRef){
	   
	let name = myFormRef.name.value;
	let email = myFormRef.email.value;
    let cardnumber = myFormRef.cardnumber.value;
	let securitycode = myFormRef.securitycode.value;
    let contact = myFormRef.contact.value;
	let expmonth = myFormRef.expmonth.value;
	
    if (name=="" && cardnumber=="" && expmonth=="" && securitycode=="" && contact=="" && email==""){
		alert("All the boxes must filled out");	
    }
    else if (cardnumber=="" && expmonth=="" && securitycode=="" && contact=="" && email==""){
		alert("All the boxes must filled out");	
    }
    else if (expmonth=="" && securitycode=="" && contact=="" && email==""){
		alert("All the boxes must filled out");	
    }
    else if (securitycode=="" && contact=="" && email==""){
		alert("All the boxes must filled out");	
    }
	else if (contact=="" && email==""){
		alert("All the boxes must filled out");	
	} else if ( email=="" ) {
		alert("Email must be filled out");
	} else if ( email.indexOf("@")==-1 ) {
		alert("Invalid Email");
	} else if ( contact=="" ) {
		alert("Contact must be filled out");
	}else{
		alert("Thank you for Purchasing");
	}
	
}