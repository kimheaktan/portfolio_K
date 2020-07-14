// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

  // ~~~~~~To Top Button~~

  $(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#myBtn').fadeIn();
    } else {
        $('#myBtn').fadeOut();
    }
  });
  $(document).ready(function() {
    $("#myBtn").click(function(event) 
    {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

    $(".fadeInText").fadeIn(2700);
  
  });
  

//   var size = $(".aboutB").css("fontSize");
//   $(".aboutB").hover(
//     function(){
//         $(this).css("fontSize", "25px");
//     }, 
//     function(){
//         $(this).css("fontSize", size);
//     }
// );

// ~~~~~~~~~VDO AutoPlay~~~~~~~~~~~~
// window.addEventListener('load', function(){
//   var newVideo = document.getElementById('vdo');
//   newVideo.addEventListener('ended', function() {
//       this.currentTime = 0;
//       this.play();
//   }, false);

//   newVideo.play();

// });

// <--------bigger--------->
function bigImg(x) {
  x.style.height = "50px";
  x.style.width = "50px";
}

function normalImg(x) {
  x.style.height = "45px";
  x.style.width = "45px";
}