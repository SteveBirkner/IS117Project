$("a.creCon").pageslide();
$("a.compCon").pageslide();
$("a.gamesCon").pageslide();
$("a.aboutCon").pageslide();



//Scroll
$('a[href^="#"]').click(function(event) {

        
        var id = $(this).attr("href");
        var offset = 5;
        var target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 500);
        event.preventDefault();
    });
