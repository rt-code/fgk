$(document).ready(function() {
         
        // masonry

        $(window).load(function(){ 

        $('#wrapper').masonry({
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            percentPosition: true
        });

         });

        $( ".tabs" ).tabs();

        $('#wrapper').masonry('reload')
        //loader
        $(".loader").fadeOut("slow");

        //fancybox init
        $('[data-fancybox]').fancybox();
        
        //scrollbar
        $(".scrollbar").customScrollbar();

        // open / close podmenu
        $('.podmenu-link').click(function(){
          $(this).parent().children('.podmenu-block').fadeToggle(100);
        });
        $(document).mouseup(function (e){ 
          var div = $(".podmenu-block");
          if (!div.is(e.target) 
              && div.has(e.target).length === 0) { 
            $('.podmenu-block').fadeOut(100);      
          }
        });

        //calendar module
        $('.calendar-module .calendar-dates').slick({
            slidesToShow:3,
           slidesToScroll:1,
           focusOnSelect: true,
           centerMode: true,
           asNavFor: '.calendar-module .calendar-block'
        });
        $('.calendar-module .calendar-block').slick({
          slidesToShow:1,
           slidesToScroll:1,
           arrows:false,
            asNavFor: '.calendar-module .calendar-dates'
        });
        //partners slider
        if ( $(window).width() > 767 ) {
        $('.partners-module .slider').slick({
            slidesToShow:4,
            slidesToScroll:1,
            responsive: [
              {
                breakpoint: 992,
                settings: {
                  slidesToShow:3
                }
              }
            ]
          });
        }
        //partners slider
        $('.media-module .slider').slick({
            slidesToShow:1,
            slidesToScroll:1
        });
        // index slider
        $('.slider-module').slick({
            slidesToShow:1,
            slidesToScroll:1,
            dots:true,
            autoplay: true,
            responsive: [
              {
                breakpoint: 1040,
                settings: {
                  dots:false
                }
              }
            ]
        });

      // big nav
      $('nav ul li').hover(function(){
        $(this).children('.podmenu').toggleClass('open');
      });

    	// mobile-nav icon
        $('.nav-icon-wrap').click(function(){
          $(this).children('#nav-icon').toggleClass('open');
          $('.nav').fadeToggle();
        });
        $('.mobile-nav-module .nav ul li.has-podmenu').click(function(){
          $(this).children('.podmenu').toggleClass('open');
        });        

      // phone mask
      $(function(){ 
          var mailcheck = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
          var telcheck = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/i;
        
        $('input').focus(function(){
           $(this).attr('placeholder0', $(this).attr('placeholder') ); 
           $(this).attr('placeholder','').css({background:'' }); 
        });
        
        $('input').blur(function(){
          var ph = $(this).attr('placeholder0');  
          if (ph.length>0) {
            $(this).attr('placeholder',ph); 
          }
        });
          $('.phone').inputmask("mask", {"mask": "+7 (999) 999 99 99", 'placeholder':' '});
      });

});