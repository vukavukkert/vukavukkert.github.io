if(Cookies.get('card') != undefined){
  var l = JSON.parse(Cookies.get('card'))
  changeElements(l)
}
function changeElements(l) {
  document.getElementsByClassName('card-left')[0].innerHTML = `
  <input type="text" placeholder="${l[0]}" name="cardnumber" value ="${l[0]}" disabled></input>
  <input type="text" placeholder="${l[1]}" name="cardname" value ="${l[1]}" disabled>
  `
  document.getElementsByClassName('card-right')[0].innerHTML = `
  <input type="text" placeholder="${l[2]}" name="expdate" value ="${l[2]}" disabled>
  <input type="text" placeholder="${l[3]}" name="cvvcode" value ="${l[3]}" disabled>
  `
}
