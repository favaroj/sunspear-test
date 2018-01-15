/*$(document).ready(function($) {
    $('a[href^="#"]').bind('click.smoothscroll', function(e) {
        e.preventDefault();
        
        // Get the current target hash
        var target = this.hash;
        
        // Animate the scroll bar action so its smooth instead of a hard jump
        $('html, body').stop().animate({
            'scrollTop' : $(target).offset().top
        }, 900, 'swing', function() {
            window.location.hash = target;
        });
    });
});*/


 $('#main-nav a[href^="#"]').on('click', function (event) {
        event.preventDefault();
        var target = $(this.hash);
        $('.home-main-content').removeClass('move-out');
        $('#main-nav').removeClass('is-visible');
        $('.cd-shadow-layer').removeClass('is-visible');
        $('body,html').animate(
                {'scrollTop': target.offset().top},
        900
                );
    });





/*$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
    if (this.hash !== "") {
        var hash = this.hash;
        event.preventDefault();
          
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 2000, function(){
            window.location.hash = hash;
        });
      } 
    });
  });*/