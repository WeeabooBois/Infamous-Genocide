window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
document.getElementById('hideA').onclick = function(){
    document.getElementById('A').hidden=true;
    document.getElementById('B').hidden=false;
}
document.getElementById('hideB').onclick = function(){
    document.getElementById('B').hidden=true;
    document.getElementById('A').hidden=false;
}
document.getElementById()
