$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    
     //>=, not <=
    if (scroll >= 200) {
        //clearHeader, not clearheader - caps H
        $(".whatiftop").css("opacity", "100");
    } else {
      $(".whatiftop").css("opacity","0");}
});
