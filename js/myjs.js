

// slick slider


$(function() {
  //bla bla bla 

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



// video 
$('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
    patterns: {
      dailymotion: {
       
        index: 'dailymotion.com',
        
        id: function(url) {        
            var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
            if (m !== null) {
                if(m[4] !== undefined) {
                  
                    return m[4];
                }
                return m[2];
            }
            return null;
        },
        
        src: 'https://www.dailymotion.com/embed/video/%id%'
        
      }
    }
  }

  
});

$(".see-more").click(function(){
  console.log("clicked");
  $("#demo").toggleClass("collapse");
  // document.getElementById("demo").classList.remove("collapse");
})
function toggleText()

{
  $("#demo").removeClass('.collapse');
   // document.getElementById("demo").classList.remove("collapse");
}

    $('.regular').slick({
  infinite: true,
  slidesToShow: 5,
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
});
 