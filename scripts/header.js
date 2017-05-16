
(function($){
  var whatTop = $(".whatiftop");
  var navUl = $('#toggle-navigation-menu ul');
  var left = $('#left');
  var right = $('#right');

  $(window).scroll(function() {
      var scroll = $(window).scrollTop();

       //>=, not <=
      if (scroll >= 350) {
          $(whatTop).css("opacity", "100");

      } else {
        $(whatTop).css("opacity","0");
        $("#toggle-navigation-menu").css("background-color", "transparent")
      };

  });

  $(window).resize(function(){
  	if ($(window).width() <= 993){
  		// do something here
      $(left).insertBefore('.left');

  	} else {
      $(right).insertBefore('.right');
    }
  });

  $(".panel-heading").css('display','none');


  $('#move-navigation li').appendTo(navUl);
  $('#bid_953').appendTo('#toggle-navigation');
  $('ul.divider').remove();
  $('.login-status').appendTo(navUl);


  $("#whatifbutton").click(function() {
    $('html, body').animate({
        scrollTop: $("#first").offset().top}, 1500);
});

})(jQuery);

function openimg() {
  $('.imgmodal').css('display',"block");
};

function closeimg() {
    $('.imgmodal, .modalimg').fadeOut(250, function(){
      $('.modalimg').empty();
      $('.modalCaption').remove();
    });
}

function showPicture(_src,_alt) {
  $('.modalimg').hide();
  $('<img src="'+_src+'">').appendTo('.modalimg');
  if(!_alt) {
    $('.imgmodal').css('margin-bottom','-50px');
  } else {
  $('<h2 id="modalCaption">'+_alt+'</h2>').appendTo('.imgmodal-content')
}
  $('.modalimg').fadeIn(250);
};
