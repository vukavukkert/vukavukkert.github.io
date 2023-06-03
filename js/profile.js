var data = JSON.parse(Cookies.get('user'))

document.getElementById('phoneNumber').placeholder = data[0]

document.getElementById('balls').innerText = data[2]
document.getElementById('name').placeholder = data[3]
document.getElementById('lastName').placeholder = data[4]
document.getElementById('adress').placeholder = data[5]

var exitButton = document.getElementsByClassName("exit-button")[0]

exitButton.addEventListener('click', function(event){
  if(Cookies.get('user') != undefined) Cookies.remove('user')
  if(Cookies.get('card') != undefined) Cookies.remove('card')
})

var editButton = document.getElementById('edit-button')
editButton.addEventListener('click', function(event) {
  const phonenumber = document.getElementById('phoneNumber')
  const name = document.getElementById('name')
  const lastName = document.getElementById('lastName')
  const adress = document.getElementById('adress')
  if(Cookies.get('user') != undefined){
    var userArr = JSON.parse(Cookies.get('user'))
    if( name.value != '' ) userArr[3] = name.value
    if( lastName.value != '' ) userArr[4] = lastName.value
    if( adress.value != '' ) userArr[5] = adress.value
    if( phonenumber.value != '' ) userArr[0] = phonenumber.value
    Cookies.set('user' ,JSON.stringify(userArr))
  }
})

