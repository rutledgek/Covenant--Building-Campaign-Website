$(window).scroll(function(){

    $('#main').each(function(){
        var $this = $(this);
        var el = $this.get(0);
        var ele = $(".whatiftop");
        if (isElementInViewport(el)) {
            $ele.toggleclass('hide')
        }
    })

})
