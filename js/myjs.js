 // scroll

// $("#about-usLink").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#about-us").offset().top
//     }, 500);
// });
// $("#our-worksLink").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#our-works").offset().top
//     }, 500);
// });
// $("#our-staffLink").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#our-staff").offset().top
//     }, 500);
// });
// $("#servicesLink").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#services").offset().top
//     }, 500);
// });
// $("#button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#demo").offset().top
//     }, 100);
// });
// console.log("ready in");

// see more
// function toggleText()
// {
//    document.getElementById("demo").classList.remove("collapse")
// }

// video Magnific Popup


// $(document).on('ready', function() {
      
//       $('.video').magnificPopup({
//         type: 'iframe',
//         iframe: {
//           patterns: {
//             dailymotion: {
//               index: 'dailymotion.com',
//               id: function(url) {        
//                   var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
//                   if (m !== null) {
//                       if(m[4] !== undefined) {
                        
//                           return m[4];
//                       }
//                       return m[2];
//                   }
//                   return null;
//               },
//               src: 'https://www.dailymotion.com/embed/video/%id%'
//             }
//           }
//         }
//       });

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



    $('.regular').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3
});
});