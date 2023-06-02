document.getElementById('balls').innerText = JSON.parse(Cookies.get('cart')).length
Cookies.remove('cart');