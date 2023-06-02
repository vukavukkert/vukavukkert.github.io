if(Cookies.get('card') != undefined){
  var l = JSON.parse(Cookies.get('card'))
  changeElements(l)
}
function changeElements(l) {
  document.getElementsByClassName('card-left')[0].innerHTML = `
  <input type="text" placeholder="${l[0]}" name="cardnumber" required></input>
  <input type="text" placeholder="${l[1]}" name="cardname" required>
  `
  document.getElementsByClassName('card-right')[0].innerHTML = `
  <input type="text" placeholder="${l[2]}" name="expdate" required>
  <input type="text" placeholder="${l[3]}" name="cvvcode" required>
  `
}
