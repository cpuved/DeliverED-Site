window.onload = function() {
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var scrollArea = 1000 - windowHeight;
  var img = document.getElementById('home-img');




  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.header').addClass('nav-w-bg');
    } else {
      $('.header').removeClass('nav-w-bg');
    }

    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;

    img.style.top = (-0.5 * Math.sqrt(scrollPercent * window.scrollY)) * 0.5 + 'vw';
    img.style.right = 3 + (-0.5 * Math.sqrt(scrollPercent * window.scrollY)) * 0.5 + 'vw';
  });
}
