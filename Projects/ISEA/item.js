//Common Uses

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

//production process



$(document).ready(function(){
    

  
	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
	$('#slider').css({ width: slideWidth, height: slideHeight });
	
	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
	
    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 500, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 500, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
        return false;
    });

    $('a.control_next').click(function () {
        moveRight();
        return false;
    });

});

