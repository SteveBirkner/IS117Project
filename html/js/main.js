$(document).ready(function(){
   
    $('a[href^="#"]').click(function(event) {

        
        var id = $(this).attr("href");
        var offset = 1;
        var target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 500);
        event.preventDefault();
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh');
        });
    });
    
    
    
    
    
        
});