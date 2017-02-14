// JavaScript Document

var Spring = new Date("2017-03-25");     // Spring Break
var Xmas    = new Date("2017-12-25");     // Christmas
var Newyear  = new Date("2018-1-1");     // New Years
var targetDate = Spring;  // target date

function calcDays()
{
  var currentDate = new Date();
  var day  = (targetDate - currentDate) / (1000 * 60 * 60 * 24);
 
   return day;
}

function calcHours(day)
{
   var hour = (day  - Math.floor(day)) * 24;
   
   return hour;
}

function calcMin(hour)
{
   var min  = (hour  - Math.floor(hour)) * 60;
   
   return min;
}

function calcSec(min)
{
   var sec  = (min  - Math.floor(min)) * 60;
   return sec;
}

function spring()
{
   targetDate = Spring;
}

function christmas()
{
   targetDate = Xmas;
}

function newyear()
{
   targetDate = Newyear;
}

 function countdown()
{
   var day  = calcDays();
   var hour = calcHours(day);
   var min  = calcMin(hour);
   var sec  = calcSec(min);
   
   document.getElementById("fday").innerHTML  = Math.floor(day);
   document.getElementById("fhour").innerHTML = Math.floor(hour);
   document.getElementById("fmin").innerHTML  = Math.floor(min);
   document.getElementById("fsec").innerHTML  = Math.floor(sec);
} 

$(document).ready(function(){
    
        $('#btnSpring').on('click', function(){
       spring();
       $('.time').css({ 'background-color': '#F64D38'}); 
       $('body').css({ 'background-image': 'url(springbreak.jpg)'});
       $('#head2').text("Spring Break 2017!").css({ 'color': '#fff', 'text-shadow': '0px 3px 3px rgba(0, 255, 0, 0.5)' }); 
    });
    
    
   
    $('#btnChristmas').on('click', function(){
       christmas();
       $('.time').css({ 'background-color': '#3498db'});
       $('body').css({ 'background-image': 'url(xmas.jpg)'});
       $('#head2').text("Christmas 2017!").css({ 'color': '#fff', 'text-shadow': '0px 3px 3px rgba(255, 0, 0, 0.5)' }); 
    });
    

    
     $('#btnNewyear').on('click', function(){
       newyear();
       $('.time').css({ 'background-color': '#5F9EA0'});
       
       $('body').css({ 'background-image': 'url(newyear.jpg)'});
       $('#head2').text("New Year 2014!").css({ 'color': '#fff', 'text-shadow': '0px 3px 3px rgba(0, 0, 255, 0.5)' });
    });
    
});