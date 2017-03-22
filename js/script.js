
// function showContact () {
//   var element = document.getElementById("contact-btn");
//   element.style.position = 'absolute';
//   element.style.top = '60px';
//   element.style.left = '0';
//   element.style.display = 'block';
// }
//
// var menu = document.querySelector('.menu');
//
// menu.addEventListener('click', function() {
//   showContact();
// });
//
// $("window").ready(function(){
//
// });

$(function() {
  $('.menu').on('click', function() {
    $('#contact-box').toggleClass('isBlock'); //toggleClassは便利
  });
});
