var link
var cartCount
if(Cookies.get('user') == undefined){
  link = '<a href="Registration.html"><img src="img/Profile_Pic.png" alt=""></a>'
}
else{
  link = '<a href="Profile.html"><img src="img/Profile_Pic.png" alt=""></a>'
}
if(Cookies.get('cart') == undefined){
  cartCount = 0
}else{
  cartCount = JSON.parse(Cookies.get('cart')).length
}
changeHeader(link)
amountOfCartItems(cartCount)
function changeHeader(link) {
  document.getElementsByClassName('user')[0].innerHTML = link;
}
function amountOfCartItems(cartCount) {
  document.getElementById('cart-items').innerText = cartCount
  if(cartCount == 0){
    document.getElementById('cart-items').style.visibility = 'hidden'
  }else{
    document.getElementById('cart-items').style.visibility = 'visible'
  }
}