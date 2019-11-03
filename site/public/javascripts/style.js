
//img hover pluse animation
$('img').hover(function (event){
    //console.log(event);
    $(event.target).removeClass('animated pulse');
    $(event.target).width();
    $(event.target).addClass('animated pulse');
}, function() {
})

//navbar hide and display animation
$(window).scroll(function () {
    var doc = document.documentElement;
    //var left = (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
    var top = (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0);
    var nav = $('.navbar');
    //console.log("scroll function called");
    if(top > 0) {
        nav.removeClass('hideNav');
        nav.width(); // Apply change
        nav.addClass('displayNav');
    }else {
        nav.removeClass('displayNav');
        nav.width(); // Apply change
        nav.addClass('hideNav');
    }
});