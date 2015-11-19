jQuery(document).ready(function($) {
  
  // global variables for script
  var current, size;
  
  $('.lightbox_trigger').click(function(e) {
    

    e.preventDefault();
    

    var image_href = $(this).attr("href");  
    

    var slideNum = $('.lightbox_trigger').index(this);
    

    if ($('#lightbox').length > 0) {        

      $('#lightbox').fadeIn(300);

    } else {                                

      var lightbox =
          '<div id="lightbox">' +
          '<p><i class="fa fa-times-circle-o"></i></p>' +
          '<div id="slideshow">' +
          '<ul></ul>' +        
          '<div class="nav">' +
          '<a href="#prev2" class="prev2 slide-nav"><i class="icon-arrow-left"></a>' +
          '<a href="#next2" class="next2 slide-nav"><i class="icon-arrow-right"></a>' +
          '</div>' +
          '</div>' +
          '</div>';
      
 
      $('body').append(lightbox);
      

      $('#imageSet').find('.lightbox_trigger').each(function() {
        var $href = $(this).attr('href');
        $('#slideshow ul').append(
          '<li>' +
          '<img src="' + $href + '">' +
          '</li>'
        );
      });
      
    }
    

    size = $('#slideshow ul > li').length;
    

    $('#slideshow ul > li').hide();
    $('#slideshow ul > li:eq(' + slideNum + ')').show();
    

    current = slideNum;
  });

  $('body').on('click', '#lightbox', function() { 
    $('#lightbox').fadeOut(300);
  });

  $('body').on(
    { mouseenter: function() {
      $('.nav').fadeIn(300);
    }, mouseleave: function() {
      $('.nav').fadeOut(300);
    }
    },'#slideshow');

  $('body').on('click', '.slide-nav', function(e) {
    

    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    

    if ($this.hasClass('prev2')) {
      dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
    } else {
     
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
    }
    
    $('#slideshow ul > li:eq(' + current + ')').fadeOut(750);
    $('#slideshow ul > li:eq(' + dest + ')').fadeIn(750);
    
    current = dest;
  });
  
});