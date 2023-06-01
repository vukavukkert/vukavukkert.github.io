var removeCardButton = document.getElementsByClassName("RemoveButton")
console.log(removeCardButton)
for(var i = 0; i < removeCardButton.length; i++){
    var button = removeCardButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove() //удаление из корзины
        updateCartTotal()
    })
}

function updateCartTotal(){
var cardItemContainer = document.getElementsByClassName("full-order")[0]
var cartOrders = cardItemContainer.getElementsByClassName("order")
var total = 0
for(var i = 0; i < cartOrders.length; i++){
    var cartOrder = cartOrders[i]
    var priceElement = cartOrder.getElementsByClassName("cart-price")[0]
    var price = parseFloat(priceElement.innerText.replace('Р', ''))
    console.log(price)
    total = total + price
}
document.getElementsByClassName('money')[0].innerText = total + 'р'
}
//вернуться в тот туториал и сделать ту функцию по добавленитю