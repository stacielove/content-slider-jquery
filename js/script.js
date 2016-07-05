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


	//Create event where clicking the next button removes active class from the first slide and adds class 'oldActive'. Create conditional - where if the oldActive is the previous slide, add the class active to the next slide. Then remove the oldActive class from oldActive - then fade out the current slide and fade into the newly active slide. 
  // Repeat the same for the previous event - but reversed.

  // Next event
	$('#next').on('click', function(){
		$('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    }else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
	});

  // Previous event
  $('#previous').on('click', function(){
    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':first-child')){
      $('.slide').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  });

  //Automagically transition between the slides

  if(autoSwitch == true) {
    setInterval(function(){


    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':last-child')){
      $('.slide').first().addClass('active');
    }else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  
    },autoSwitchSpeed);
  }

});