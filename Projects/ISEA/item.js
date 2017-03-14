$(function() {
  $('.square').hover(
    function() {
      $(this).children('.hover-image').stop().show('fade', 100).animate({
        marginTop: '-100px',
        height: '200px',
        opacity: 1.0
      }, 300, 'swing');
      
      $(this).children('.hover-text').stop().show('fade', 100).animate({
        marginTop: '100px',
        height: '100px',
        opacity: 1.0
      }, 300, 'swing');
      
      $(this).children('.hover-arrow').stop().show('fade', 100).animate({
        opacity: 1.0
      }, 300, 'swing');
    },
    function() {
      $(this).children('.hover-image').stop().animate({
        marginTop: '100px',
        height: '0px',
        opacity: 0
      }, 300, 'swing', function(){
        $(this).hide('fade', 100);
      });
      
      $(this).children('.hover-text').stop().animate({
        marginTop: '100px',
        height: '0px',
        opacity: 0
      }, 300, 'swing', function(){
        $(this).hide('fade', 100);
      });
      
      $(this).children('.hover-arrow').stop().animate({
        opacity: 0
      }, 300, 'swing', function() {
        $(this).hide('fade', 100);
      });
   });
});