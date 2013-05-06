


$(document).ready(function(){
    
    
    
  
    
    
        
});




//Scroll
$('a[href^="#"]').click(function(event) {

        
        var id = $(this).attr("href");
        var offset = 5;
        var target = $(id).offset().top - offset;
        $('html, body').animate({scrollTop:target}, 500);
        event.preventDefault();
    });


//content additoin

