$(document).ready(function(){

    $('#lightbox').hide();

    $('.lightbox_trigger').click(function(e){

        e.preventDefault();

        var image_href = $(this).attr('href');

        //var slideNum = $('#lightbox_trigger').index(this);

        if($('#lightbox').length > 0) { //#lightbox exists

            $('#content').html('<img src="' + image_href + '" />');
            var maxHeightValue = $('#lightbox').height()-60;
            $('#lightbox img').css("max-height", maxHeightValue + "px");
            $('#lightbox').fadeIn(400);


        } else {

            var lightbox = '<div id="lightbox">' + '<p></p>' + '<div id="content">'+'<img src="'+image_href+'"/>' + '</div>' + '</div>';
            $('body').append(lightbox);

        }

        var pos = $('#content').width();

        $('.close_x').css({
            width: pos,
            display: "block",
            left: '-' + (20+pos)
        });

    });

    $('body').on('click','#lightbox', function() { 
        $('#lightbox').fadeOut(300);

    });
    
});