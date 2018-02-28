 // scroll

$("#about-usLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-us").offset().top
    }, 500);
});
$("#our-worksLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#our-works").offset().top
    }, 500);
});
$("#our-staffLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#our-staff").offset().top
    }, 500);
});
$("#servicesLink").click(function() {
    $('html, body').animate({
        scrollTop: $("#services").offset().top
    }, 500);
});
$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#demo").offset().top
    }, 100);
});


// see more
function toggleText()
{
   
document.getElementById("demo").classList.remove("collapse")
}

// video Magnific Popup


// slick slider

$(document).on('ready', function() {
      $(".vertical-center-4").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 4,
        slidesToScroll: 2
      });
      $(".vertical-center-3").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".vertical-center-2").slick({
        dots: true,
        vertical: true,
        centerMode: true,
        slidesToShow: 2,
        slidesToScroll: 2
      });
      $(".vertical-center").slick({
        dots: true,
        vertical: true,
        centerMode: true,
      });
      $(".vertical").slick({
        dots: true,
        vertical: true,
        slidesToShow: 3,
        slidesToScroll: 3
      });
      $(".regular").slick({
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive:[
          {
            breakpoint: 1024,
            settings:{
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 740,
            settings:{
              slidesToShow:1,
              slidesToScroll:1
            }
          }
        ]
      });

      $(".center").slick({
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 5,
        slidesToScroll: 3
      });

      $(".variable").slick({
        dots: true,
        infinite: true,
        variableWidth: true
      });
      $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true
      });
    });