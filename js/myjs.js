
// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 300) {
// 	    $(".scroll-class").css("background" , "inherit");
// 	  }

// 	  else{
// 		  $(".scroll-class").css("background" , "#ffffff");  	
// 	  }
//   })
// })

var status = "less";

function toggleText()
{
    var text="Here is some text that I want added to the HTML file";
    
    if (status == "less") {
        document.getElementById("demo").classList.remove("collapse")
        document.getElementById("toggleButton").innerText = "See Less";
        status = "more";
    } else if (status == "more") {
        document.getElementById("demo").classList.add("collapse")
        document.getElementById("toggleButton").innerText = "See More";
        status = "less"
    }
}