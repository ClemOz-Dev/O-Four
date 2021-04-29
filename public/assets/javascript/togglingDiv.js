footer = document.querySelector('#footer');
// console.log(footer);
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 50 ) {
    footer.className = "footer show"
  } else {
    footer.className = "footer hide"
  }

};

window.addEventListener("scroll", myScrollFunc);
