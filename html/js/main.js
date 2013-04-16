function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

/*
$("#lhome").click(function() {
   scrollToAnchor('home');
});
$("#lcreators").click(function() {
   scrollToAnchor('creators');
});
$("#games").click(function() {
   scrollToAnchor('games');
});
*/


