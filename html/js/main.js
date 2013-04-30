


$(document).ready(function(){
    
    var elem = document.getElementById("creCon");
    elem.innerHTML = "Description of the creators sections";
    
    
    
    $("#sidM").click(function(){
        var sidStuff = document.getElementById("creCon");
        elem.innerHTML = "asdf";
        
        $('#myModal').modal('toggle')
    
    
    });

        
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

