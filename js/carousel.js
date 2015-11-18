$(function(){

  var slideWidth = $('.slide').width(),
      slideCount = $('.slide').size(), 
      clicks = 0;
  //incremental because it is relative
  //800px measures from the css, more flexible so you don't have to change in two locations

  //NO Javascript?
  $('.frame').css({
    'height': '315px',
    'overflow': 'hidden'
  });

  $('.slide').css({
    'float': 'left'
  })

  $('.tray').width(slideWidth * slideCount); 
  //allows us to get rid of set width on the tray and the amount of slides we add will resize the container

  $('.next').click(function() {

    if(clicks < slideCount-1){
        clicks ++;
    } else {
      clicks = 0;
    }

    var slideDistance = slideWidth * clicks;
    $('.tray').animate({'right': slideDistance}, 600);

    event.preventDefault();

  });

  $('.prev').click(function() {

    if(clicks > 0){
      clicks --;
    } else {
      clicks = slideCount-1;
    }

    var slideDistance = slideWidth * clicks;
    $('.tray').animate({'right': slideDistance}, 600);

    event.preventDefault();

  });

  $('.prev, .next').hide();

  $('.video').hover(function(){
    $('.prev, .next').show();
  }, function(){
    $('.prev, .next').hide();
  });


});