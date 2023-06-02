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
}
function addItemToCard(title, price, image){
    var myAry = [title, price, image];
    ItemsArray.push(myAry);
    Cookies.set('cart', JSON.stringify(ItemsArray))
    
}