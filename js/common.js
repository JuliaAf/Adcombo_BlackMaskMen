$(document).ready(function(){
    /*counter header*/
    var clockTime = 052517;
    var clock = $('.counter-clock').FlipClock(clockTime, {
        countdown: 10,
        interval:2000
    });


    /*counter footer*/
    var clock, countdown;
    clock = new FlipClock($('.counter-footer'),54, {
        clockFace: 'Counter',
        minimumDigits: 2,
        countdown:true,
        autoStart:true,
        interval:3000
    });
    countdown = setInterval(function() {
            if(clock.getTime().time < 7) {
            clock.stop();
            }
    }, 0);




  /*scroll*/
  $('.toform').click(function(e) {
  e.preventDefault();
  var a = $('.js_submit'),b = a.closest('form');
  if($('form#toform').length) a = $('#toform .js_submit'),b = a.closest('form#toform');
  if(b.length && a.is(':visible')){
  $("html,body").animate({scrollTop: b.offset().top}, 1000);
  		}
  return false;
  });


  /*slick carousel*/
  function slick(){
      if($(window).width() <= 768){
        $('.results__list').slick({
             adaptiveHeight:false,
             autoplay:true,
             pauseOnHover:true,
             responsive:true,
             slidesToShow:1,
             slidesToScroll:1,
             prevArrow:"",
             nextArrow:"",
             dots:true,
             dotsClass: "results__controls"
         });
      }
      else {
        $('.results__list').slick('unslick');
      }
  }
  $(window).load(slick);
  $(window).resize(slick);
  $(window).on('load resize',slick);




   });//end
