hideContent()

if(Cookies.get('cart') != undefined){
    var c = JSON.parse(Cookies.get('cart'));
    Cookies.remove('cart');
    for(var i = 0; i < c.length; i++)
    {
        addItemToCard(c[i][0],c[i][1],c[i][2]);
        updateCartTotal();
    } 
}
var removeCardButton = document.getElementsByClassName("RemoveButton")
for(var i = 0; i < removeCardButton.length; i++){
    var button = removeCardButton[i]
    button.addEventListener('click', function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.parentElement.remove() //удаление из корзины
        updateCartTotal()
    })
}

function updateCartTotal(){
    var cardItemContainer = document.getElementsByClassName("full-order")[0]
    var cartOrders = cardItemContainer.getElementsByClassName("order")
    var total = 0
    var ItemsArray = []
        if(cartOrders.length == 0){
            Cookies.remove('cart');
        }
        for(var i = 0; i < cartOrders.length; i++){
            var cartOrder = cartOrders[i];
            var priceElement = cartOrder.getElementsByClassName("cart-price")[0];
            var price = parseFloat(priceElement.innerText.replace('Р', ''));
            var title = cartOrder.getElementsByClassName("cart-title")[0].innerText;
            var img = cartOrder.getElementsByClassName("cart-img")[0].src;
            total = total + price;
            ItemsArray.push([title, price, img]);
            Cookies.set('cart', JSON.stringify(ItemsArray));
        }
    amountOfCartItems()
    document.getElementsByClassName('money')[0].innerText = total + 'р'
}
//вернуться в тот туториал и сделать ту функцию по добавленитю
function addItemToCard(title, price, image){
    var cartRow = document.createElement('div')
    cartRow.classList.add('order-bottom')
    var cartItems =  document.getElementsByClassName('full-order')[0]
    var cartRowContents = `
        <div class="order">
            <div style="justify-content: center; display: flex; width: 200px; height: 200px" ><img  class="cart-img" src="${image}" alt="pizza"></div>
            <div class="cart-title"><p>${title}</p></div>
            <div class="line"></div>
            <div class="cart-price"><p>${price + "P"}</p></div>
            <div><button class="RemoveButton">X</button></div>
        </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
}

const buyButtonForm = document.getElementById('buy-button-form')
buyButtonForm.addEventListener('submit', function(e){
  var cartItems
  if(Cookies.get('cart') == undefined){
    e.preventDefault()
  }else{
    if(document.getElementById('adress').value == '' || Cookies.get('card') == undefined){
        e.preventDefault()
    }else{
        cartItems = JSON.parse(Cookies.get('cart'))
        if(cartItems.length == 0){
            e.preventDefault()
          }else{
            var newadress = document.getElementById('adress').value
            var userData = JSON.parse(Cookies.get('user'))
            Cookies.set('user',JSON.stringify([userData[0], userData[1], userData[2]+ cartItems.length, userData[3], userData[4], newadress]))
          }
    }
  }  
})

function amountOfCartItems() {
    if(Cookies.get('cart') == undefined){
        cartCount = 0
    }else{
        cartCount = JSON.parse(Cookies.get('cart')).length
    }
    document.getElementById('cart-items').innerText = cartCount
    if(cartCount == 0){
        document.getElementById('cart-items').style.visibility = 'hidden'
    }else{
        document.getElementById('cart-items').style.visibility = 'visible'
    }
}
function hideContent() {
    if(Cookies.get('user') == undefined){
        document.getElementById('login-to-see').style.display = 'none'
    }
    else{
        document.getElementById('message').style.display = 'none'
        fiifFields()
    }
}
function fiifFields() {
    document.getElementById('adress').value = JSON.parse(Cookies.get('user'))[5]
}