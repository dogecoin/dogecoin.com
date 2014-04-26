/* YouTube "What is Dogecoin" Video */
$(document).ready(function() {
    function onPlayerStateChange(event) {
        switch(event.data) {
            case YT.PlayerState.ENDED:
                $('.logo-container').fadeOut('fast').removeClass('video').addClass('logo').html('<img class="watch-video" src="/imgs/such-video.png" alt="Watch Video"><img src="/imgs/dogecoin-300.png" alt="Dogecoin Logo">').fadeIn('fast');
                break;
        }
    }

    $('body').on('click', '.watch-video', function(){
        $('.logo-container').removeClass('logo').addClass('video').html('<iframe width="525" height="295" id="youtube-frame" src="http://www.youtube.com/embed/_KVZmS_UO5I?enablejsapi=1&autoplay=1" frameborder="0" allowfullscreen></iframe>').fitVids();
        new YT.Player('youtube-frame', {
                events: {
                    'onStateChange': onPlayerStateChange
                }

        });

    });
});

/* Smooth Scroll */
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 620);
        return false;
      }
    }
  });
});

/* Scroll Button: On Mouseover, Button Fades/Unfades */
$("#scroll-button").mouseover(function() {
	$(this).css({ 'opacity' : 0.8 });
});
$("#scroll-button").mouseout(function() {
	$(this).css({ 'opacity' : 1 });
});

/* Tooltip */
$(function () { $("[data-toggle='tooltip']").tooltip(); });

/* FitVids */
$("#youtube-video").fitVids();

/* FitText */
$(".fit-h1").fitText(1, { minFontSize: '32px', maxFontSize: '36px' });
$(".fit-h2").fitText(1.2, { minFontSize: '20px', maxFontSize: '30px' });
$(".fit-h4-1").fitText(2.2, { minFontSize: '10px', maxFontSize: '18px' });
$(".fit-h4-2").fitText(2.2, { minFontSize: '16px', maxFontSize: '18px' });
