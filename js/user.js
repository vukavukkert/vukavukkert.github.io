var link
if(Cookies.get('user') == undefined){
  link = '<a href="Registration.html"><img src="img/Profile_Pic.png" alt=""></a>'
}
else{
  link = '<a href="Profile.html"><img src="img/Profile_Pic.png" alt=""></a>'
}
changeHeader(link)
function changeHeader(link) {
  document.getElementsByClassName('user')[0].innerHTML = link;
}