var addToCardButtons = document.getElementsByClassName("menu-button")
var ItemsArray
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
    console.log(title)
    var myAry = [title, price, image];
    Cookies.set('name', JSON.stringify(myAry));
    console.log(Cookies.get('name'))
}