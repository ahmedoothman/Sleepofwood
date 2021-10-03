//STICKY NAV-BAR FOR HOME PAGE//

$(document).ready(function () {
    /*nav*/
    $('.js--section-about').waypoint(function (direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        } else{
            $('nav').removeClass('sticky');
        }
    },{offset:'60px'})
    });
//SCROLL TO CONTACT AND HOME USING HREF AND ID//
 $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });

 //SHOW MENU NAV FOE MOBILE//
    $('.mob-nav-icon').click(function() {
        var nav = $('.main-navo');
        var icon = $('.mob-nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }        
    });



     