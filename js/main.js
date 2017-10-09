setTimeout(function(){
  $("body div").not(".preloader").addClass("fadeInUp animated visible");
}, 750);

setTimeout(function(){
  $(".preloader").addClass("hidden");
}, 1000);