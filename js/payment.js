
if(Cookies.get('card') !=  undefined ){
  var l = JSON.parse(Cookies.get('card'));  
  changeElements(l);
}


function changeElements(l) {
  document.getElementById('cardnumber').value = l[0]
  document.getElementById('cardname').value = l[1]
  document.getElementById('expdate').value = l[2]
  document.getElementById('cvvcode').value = l[3]
}
const form = document.getElementById('card-form')
form.addEventListener('submit', (e) =>{
  const cardNumber = document.getElementById('cardnumber')
  const cardName = document.getElementById('cardname')
  const expDate = document.getElementById('expdate')
  const cvvCode = document.getElementById('cvvcode')
Cookies.set('card',JSON.stringify([cardNumber.value, cardName.value, expDate.value, cvvCode.value]))
})
