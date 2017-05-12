$(window).scroll(function() {
    var scroll = $(window).scrollTop();

     //>=, not <=
    if (scroll >= 200) {
        $(".whatiftop").css("opacity", "100");
    } else {
      $(".whatiftop").css("opacity","0");}
});

$(window).resize(function(){
	if ($(window).width() <= 993){
		// do something here
    $('#right').insertBefore('#left');
	} else {
    $('#left').insertBefore('#right');

  }
});
