$("#menuBtn").click(function() {
    $(".iconDesign").toggleClass("closeMenu");
    $(".navbar-brand").toggleClass("navbar-brand-toggle");
    $("#mainNav").toggleClass("overlay");
    $(".navbar-collapse").toggleClass("collapse");
  });