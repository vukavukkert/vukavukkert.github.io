var data = JSON.parse(Cookies.get('user'))
console.log(data)

document.getElementById('phoneNumber').placeholder = data[0]

document.getElementById('balls').innerText = data[2]

var exitButton = document.getElementsByClassName("exit-button")[0]

exitButton.addEventListener('click', function(event){
  if(Cookies.get('user') != undefined) Cookies.remove('user')
  if(Cookies.get('card') != undefined) Cookies.remove('card')
})

