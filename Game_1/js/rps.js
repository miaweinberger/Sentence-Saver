$(function () {

var dogScore = 0;
var studentScore = 0;

var options = ['rock', 'paper', 'scissors'];

var audioDog = document.createElement('audio');
audioDog.setAttribute('src', './audio/dog.wav');

var audioPaper = document.createElement('audio');
audioPaper.setAttribute('src', './audio/PaperCrunch.m4a');

var audioSciz = document.createElement('audio');
audioSciz.setAttribute('src', './audio/sciz.m4a');

var audioScizCrunch = document.createElement('audio');
audioScizCrunch.setAttribute('src', './audio/scizcrunch.mp3');

var audioRock = document.createElement('audio');
audioRock.setAttribute('src', './audio/rockthud.m4a');

var audioSlide = document.createElement('audio');
audioSlide.setAttribute('src', './audio/slide.m4a');

var audioDing = document.createElement('audio');
audioDing.setAttribute('src', './audio/ding.mp4');

var audioBoing = document.createElement('audio');
audioBoing.setAttribute('src', './audio/Cartoon_Boing.mp3');
	
var video = document.getElementById("maxtest");

$('a').click(compare);

$('a').click(function(event) {
  audioDog.play();
	
	
});



function compare() {
    var userChoice = $(this).attr('id');
    console.log(userChoice);


    var randomIndex = Math.floor(Math.random() * 3 +0);
    var computerChoice = options[randomIndex];
    console.log('computerChoice' + computerChoice);

    if (userChoice === 'rock' && computerChoice === 'rock') {
        console.log('tie');
        $("#allRPS").css('background-image', 'url(./images/MRKR0.png');


        setTimeout (function next() {
            audioSlide.play();
            
            }, 1200, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/RockTie.png');
            
            }, 2700, 800);

        $('#message').text("It's a tie!");
        $('#message').addClass("animated slideInRight").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        $("#message").removeClass();

        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);


       });

    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        console.log('dog wins');
        

        $("#allRPS").css('background-image', 'url(./images/MPKR0.png');
        
        setTimeout (function next() {
             $("#allRPS").css('background-image', 'url(./images/MPKR2.png');
             audioPaper.play();
            }, 1400);

        setTimeout (function next() {
             $("#allRPS").css('background-image', 'url(./images/MPKR3.png');
            }, 4000);

        setTimeout (function next() {
            audioDing.play();
        }, 3300, 800);

        dogScore = dogScore +1;
        $('#dogScore').text(dogScore);
        $('#dogScore').addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        $('#dogScore').removeClass();

        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);

       });
       
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        console.log('you win');
        studentScore = studentScore +1;
        $("#allRPS").css('background-image', 'url(./images/MSKR0.png');


        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKR1.png');
            audioRock.play();
            }, 1300, 800);


        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKR2.png');
            audioRock.play();
            }, 1600, 800);



        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKR3.png');
            audioRock.play();
            }, 1900, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKR4.png');
            audioScizCrunch.play();
            }, 2200, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKR5.png');
            }, 4500);

        setTimeout (function next() {
            audioDing.play();
            }, 3700, 800);


        $('#studentScore').text(studentScore);
        $('#studentScore').addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        $("#studentScore").removeClass();

        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);

       });
    
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        console.log('you win');
        $("#allRPS").css('background-image', 'url(./images/MRKP0.png');

       
        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MRKP2.png');
            audioPaper.play();
            }, 1300);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MRKP3.png');
            }, 4400);
    
        setTimeout (function next() {
            audioDing.play();
            }, 3700, 800);
        
        studentScore = studentScore +1
        $('#studentScore').text(studentScore);
        $('#studentScore').addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        $("#studentScore").removeClass();
    
        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);
       
       });
    } else if (userChoice === 'paper' && computerChoice === 'paper') {
        console.log('tie');
        $("#allRPS").css('background-image', 'url(./images/MPKP0.png');

       setTimeout (function next() {
            audioSlide.play();
            
            }, 1200, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/PaperTie.png');
            
            }, 2700, 800);


        $('#message').text("It's a tie!");
        $('#message').addClass("animated slideInRight").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        $("#message").removeClass();

        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);
       });


    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        console.log('dog wins');
        dogScore = dogScore +1
        $("#allRPS").css('background-image', 'url(./images/MSKP0.png');

      
        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKP1.png');
            audioSciz.play();
            }, 1300, 800);


        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKP2.png');
            audioSciz.play();
            }, 1600, 800);
    

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKP3.png');
            audioSciz.play();
            }, 1900, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKP4.png');
            audioSciz.play();
            }, 2200, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MSKP5.png');
            }, 4000, 800);

        
        setTimeout (function next() {
            audioDing.play();
        }, 3300, 800);


        $('#dogScore').text(dogScore);
        $('#dogScore').addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        $("#dogScore").removeClass();

        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);
       });
    }


    else if (userChoice === 'scissors' && computerChoice === 'rock') {
        console.log('dog wins');
        dogScore = dogScore +1
        $("#allRPS").css('background-image', 'url(./images/MRKS0.png');


        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MRKS1.png');
            audioRock.play();
            }, 1300, 800);


        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MRKS2.png');
            audioRock.play();
            }, 1600, 800);



        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MRKS3.png');
            audioRock.play();
            }, 1900, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MRKS4.png');
            audioScizCrunch.play();
            }, 2200, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MRKS5.png');
            }, 4000);

        setTimeout (function next() {
            audioDing.play();
            }, 3300, 800);

        $('#dogScore').text(dogScore);
        $('#dogScore').addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
        $("#dogScore").removeClass();

        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);
       });

    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        console.log('you win');
        studentScore = studentScore +1

        $("#allRPS").css('background-image', 'url(./images/MPKS0.png');
            
        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MPKS1.png');
            audioSciz.play();
            }, 1300, 800);


        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MPKS2.png');
            audioSciz.play();
            }, 1600, 800);



        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MPKS3.png');
            audioSciz.play();
            }, 1900, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MPKS4.png');
            audioSciz.play();
            }, 2200, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/MPKS5.png');
            }, 4500, 800);

        setTimeout (function next() {
            audioDing.play();
            }, 3700, 800);

            $('#studentScore').text(studentScore);
            $('#studentScore').addClass("animated zoomIn").one('animationend webkitAnimationEnd oAnimationEnd', function() {
            $("#studentScore").removeClass();
       
        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);
        
       });
    } else if (userChoice === 'scissors' && computerChoice === 'scissors') {
        console.log('tie');
        $("#allRPS").css('background-image', 'url(./images/MSKS0.png');
        

        setTimeout (function next() {
            audioSlide.play();
            
            }, 1200, 800);

        setTimeout (function next() {
            $("#allRPS").css('background-image', 'url(./images/ScizTie.png');
            
            }, 2700, 800);


            $('#message').text("It's a tie!");
            $('#message').addClass("animated slideInRight").one('animationend webkitAnimationEnd oAnimationEnd', function() {
            $("#message").removeClass();
      
        setTimeout(function(){ 
            location.replace("file:///Users/miaweinberger/Desktop/IFL/Game_1/index.html"); 

            }, 1800);
        
       });
    }


}



});