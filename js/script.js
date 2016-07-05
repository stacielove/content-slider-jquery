$(document).ready(function(){
  var speedTrans = 500;// fade speed of transition
  var autoSwitch= true;// auto slider option
  var autoSwitchSpeed = 4000; //auto slider speed

  //Add active class
  $('.slide').addClass('active');
  //Hide all slides
  $('.slide').hide();
  //Show first slide
  $('.active').show();

  // Next event
  $('#next').on('click', nextSlide);

  // Previous event
  $('#previous').on('click', previousSlide);

  //Automagically transition between the slides
  if(autoSwitch == true) {
    setInterval(nextSlide,autoSwitchSpeed);
  }

  //Create function where active class is removed from the first slide and then adds class 'oldActive'. Create conditional - where if the oldActive is the previous slide, add the class active to the next slide. Then remove the oldActive class from oldActive - then fade out the current slide and fade into the newly active slide. Repeat the same for the previous event - but reversed.

  //Function: Next slide
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    }else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  }

  //Function: Previous slide
  function previousSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  }

});