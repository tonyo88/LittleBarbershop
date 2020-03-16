window.onload = function() {

  $(document).ready(function() {

    // Open / Close Mobile Menu

    $("#toggle-btn").click(() => {
      $("span").toggleClass("active-toggle-btn");
      $(".logo-name").toggleClass("hidden");
      $(".main-menu").toggleClass("active-open-mobile-menu");
    });
    $(".main-menu ul li a").click(() => {
      $("span").removeClass("active-toggle-btn");
      $(".logo-name").removeClass("hidden");
      $(".main-menu").removeClass("active-open-mobile-menu");
    });

     // Open / Close Schedule Hours

     $(".button-hours").on("click", function() {
      if($(this).text() === "Open Hours"){
        $(this).text("Close Hours");
      } else{
        $(this).text("Open Hours");
      }
       $(".schedule")
         .stop()
         .slideToggle("slow");
     });

  //Open in New Window Tab

  $(document).on('click', '.footer-social ul li a', function(e){ 
      e.preventDefault(); 
      let url = $(this).attr('href'); 
      window.open(url, '_blank');
    });

    $(document).on('click', '.social-barber a', function(e){ 
      e.preventDefault(); 
      let url = $(this).attr('href'); 
      window.open(url, '_blank');
    });
    
 });


  $(window).scroll( () => {

   //Active Fixed menu

    if ($(this).scrollTop() > 600) {
      $("#navigation").addClass("fixed-nav");
    } else {
      $("#navigation").removeClass("fixed-nav");
    }
  });

  //Nav - Current Link / Current Section

  $('#menu').onePageNav({
    currentClass: 'active',
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: '',
    easing: 'swing'
  });

 //ScrollUp BTN

  $.scrollUp({
    scrollImg: true
  });
  new WOW().init();
};
