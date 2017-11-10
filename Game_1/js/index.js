$(function() {

"use strict";
	
var score = 0; 

var audioElement = document.createElement('audio');
audioElement.setAttribute('src', './audio/friendBreakdown.m4a');

var sentenceAudio = document.createElement('audio');
sentenceAudio.setAttribute('src', './audio/friend.m4a');

var chimeAudio = document.createElement('audio');
chimeAudio.setAttribute('src', './audio/Magic_Chime.m4a');


$('#replay').click(function(event) {
  sentenceAudio.play();
  // animateReplay("#replay", "rubberBand");
});

// function animateReplay(replay, animation) {
//   $('#replay').addClass(animation);
// }


$('p, #allOk').click(function(event) {

  if (event.target.nodeName === 'SPAN') {
    clickWrongSpelling();
    setTimeout (function next() {
    
    $('#stuff').css('background-image', 'url(./images/2.png)');


     $('#a1').html('The');
     $('#a2').html('dog');
     $('#a3').html('played');
     $('#a4').html('in');
     $('#a5').html('the');
     $('#a6').html('parc.');
	$('#sentence2').html('');
     $('#pic').attr('src', './images/dog-1318689_1920.jpg');
     $('p, a, span').css('color', '#6633cc');
     $('h1').css('color', '#16E9A9');
     $('body').css('background-color', '#165589');
     $('h3').css('color', '#fbd666');
     $('#number, button').css('color','#FB4274');
     $('button').css('border','2.5px solid #FB4274');
     $('#correction').text('');
     $('#correctionR').text('');
     $('span').css('background-color', 'rgba(0, 0, 0, 0');
     
    }, 4000, 200);
  } else {
    clickRightSpelling();
    animate("#correction", "bounceInLeft");
    animate("#correctionR", "bounceInRight");
    audioElement.play();
    colorChange();
    setTimeout (function next() {
      $('#stuff').css('background-image', 'url(./images/2.png)');
     $('#a1').html('The');
     $('#a2').html('dog');
     $('#a3').html('played');
     $('#a4').html('in');
     $('#a5').html('the');
     $('#a6').html('parc');
     $("#sentence2").html('');
     $('#pic').attr('src', './images/dog-1318689_1920.jpg');
     $('p, a, span').css('color', '#6633cc');
     $('h1').css('color', '#16E9A9');
     $('body').css('background-color', '#165589');
     $('h3').css('color', '#fbd666');
     $('#number, button').css('color','#FB4274');
     $('button').css('border','2.5px solid #FB4274');
     $('#correction').text('');
     $('#correctionR').text('');
     $('span').css('background-color', 'rgba(0, 0, 0, 0');
     // $('a').mouseenter(function() {
     //   $(this).css('color', '#EBF2BA');
     // });
    }, 9000);
  }



});

function clickWrongSpelling() { 
 // alert("yay!");

$('#correction').text('yes!');

score = score + 1;

setTimeout(function(){ $('<img src="./images/starwhite.svg">').fadeIn(1500).appendTo($('#starsTop'));
  chimeAudio.play();
}, 1550);


 
 if (score === 3) {
  setTimeout(function(){ location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/rps.html"); }, 4500);
 }
}



function clickRightSpelling() { 
  // alert("try again!");
  $('span').css('background-color', 'rgba(51, 247, 116, .7');
  // $('span').text('friend');

  $('#correction').text('fr');
  $('#correctionR').text('iend');
}

function animate(correction, animation) {
$("#correction").addClass(animation);
$('#correctionR').addClass(animation);
}

function colorChange(){
$('#correction').css('color', 'white'); 
$('#correctionR').css('color', 'white');
}



});
