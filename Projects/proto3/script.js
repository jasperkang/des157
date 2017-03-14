 
document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
});

$(document).ready(function () {
  var $nav = $('#navigation'),
      posTop = $nav.position().top;
  $(window).scroll(function () {
    var y = $(this).scrollTop();
    if (y > posTop) { $('nav').addClass('fixed'); }
    else { $('nav').removeClass('fixed'); }
  });
});


