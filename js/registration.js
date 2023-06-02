const reg = document.getElementById('registration')
const errorElement = document.getElementById('error')

reg.addEventListener('submit', (e) =>{
  var message = []
  const phoneNumber = document.getElementById('phoneNumber')
  const balls = 0
  const password = document.getElementById('passWord')
  const passwordRep = document.getElementById('passWordRep')
  if(password.value != passwordRep.value){
    message.push('Пароли не совпадают! >:(')
  }
  if(message.length > 0){
    e.preventDefault()
    errorElement.innerText = message.join(', ')
  }
  else{
    Cookies.set('user',JSON.stringify([phoneNumber.value, password.value, balls]))
  }
})