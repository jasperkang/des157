document.addEventListener('DOMContentLoaded', function() {
  console.log ('reading script');

  //capture images into variables
  var wallet=document.getElementById('wallet');
  var phone=document.getElementById('phone');
  var watch=document.getElementById('watch');
  var keys=document.getElementById('keys');
  var knife=document.getElementById('knife');
  //capture closing variables
  var close1=document.getElementById('close1');
  var close2=document.getElementById('close2');
  var close3=document.getElementById('close3');
  var close4=document.getElementById('close4');
  var close5=document.getElementById('close5');

  //wallet hover event listener
  wallet.addEventListener('mouseover', function() {
    wallet.style.opacity=1;
    wallet.src='images/wallet.jpg';
  });
  //wallet mouseout event listener
  wallet.addEventListener('mouseout', function() {
    wallet.style.opacity=0;
    wallet.src='images/wallet.jpg';
  });
  //wallet click
  wallet.addEventListener('click', function() {
    walletInfo.style.opacity=1;
  });
  //close info
  close1.addEventListener('click', function () {
    walletInfo.style.opacity=0;
  });

  //phone hover event listener
  phone.addEventListener('mouseover', function() {
    phone.style.opacity=1;
    phone.src='images/phone.jpg';
  });
  //phone mouseout event listener
  phone.addEventListener('mouseout', function() {
    phone.style.opacity=0;
    phone.src='images/phone.jpg';
  });
  //phone click
  phone.addEventListener('click', function() {
    phoneInfo.style.opacity=1;
  });
  //phone info
  close2.addEventListener('click', function () {
    phoneInfo.style.opacity=0;
  });


  //watch hover event listener
  watch.addEventListener('mouseover', function() {
    watch.style.opacity=1;
    watch.src='images/watch.png';
  });
  //watch mouseout event listener
  watch.addEventListener('mouseout', function() {
    watch.style.opacity=0;
    watch.src='images/watch.png';
  });
  //watch click
  watch.addEventListener('click', function() {
    watchInfo.style.opacity=1;
  });
  //close info
  close3.addEventListener('click', function () {
    watchInfo.style.opacity=0;
  });    
    
  //keys hover event listener
  keys.addEventListener('mouseover', function() {
    keys.style.opacity=1;
    keys.src='images/keys.png';
  });
  //keys mouseout event listener
 keys.addEventListener('mouseout', function() {
    keys.style.opacity=0;
    keys.src='images/keys.png';
  });
  //keys click
  keys.addEventListener('click', function() {
    keysInfo.style.opacity=1;
  });
  //close info
  close4.addEventListener('click', function () {
    keysInfo.style.opacity=0;
  });


  //knife hover event listener
 knife.addEventListener('mouseover', function() {
    knife.style.opacity=1;
    knife.src='images/knife.jpg';
  });
  //knife mouseout event listener
 knife.addEventListener('mouseout', function() {
    knife.style.opacity=0;
    knife.src='knife.jpg';
  });
  //knife click
  knife.addEventListener('click', function() {
    knifeInfo.style.opacity=1;
  });
  //knife info
  close5.addEventListener('click', function () {
   knifeInfo.style.opacity=0;
  });

});