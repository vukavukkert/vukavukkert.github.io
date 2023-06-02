const form = document.getElementById('profile-card-form')
form.addEventListener('submit', (e) =>{
  const cardNumber = document.getElementById('cardnumber')
  const cardName = document.getElementById('cardname')
  const expDate = document.getElementById('expdate')
  const cvvCode = document.getElementById('cvvcode')
Cookies.set('card',JSON.stringify([cardNumber.value, cardName.value, expDate.value, cvvCode.value]))
})

