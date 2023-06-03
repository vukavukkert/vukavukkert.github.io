var addToCardButtons = document.getElementsByClassName("menu-button")
var ItemsArray
if(Cookies.get('cart') == undefined){
    ItemsArray= []
} else{
    ItemsArray = JSON.parse(Cookies.get('cart'));
}

for(var i = 0; i < addToCardButtons.length; i++){
    var button = addToCardButtons[i]
    button.addEventListener('click', AddToCardClicked) 
}
function AddToCardClicked(event){
    var button = event.target
    var shopItem = button.parentElement
    var title = shopItem.getElementsByClassName("bold")[0].innerText
    var price = parseFloat(shopItem.getElementsByClassName("price")[0].innerText.replace('р', ''))
    var image = shopItem.getElementsByClassName("image")[0].src //я сам додумлася
    addItemToCard(title, price, image)
    amountOfCartItems()
}
function addItemToCard(title, price, image){
    var myAry = [title, price, image];
    ItemsArray.push(myAry);
    Cookies.set('cart', JSON.stringify(ItemsArray))
    
}

function amountOfCartItems() {
    var cartCount
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