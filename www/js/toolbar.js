   $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.a').fadeOut();
     }
    else
     {
      $('.a').fadeIn();
     }
 });