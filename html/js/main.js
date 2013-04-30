


$(document).ready(function(){
    
    //var elem = document.getElementById("creCon");
    //elem.innerHTML = "Description of the creators sections";
    
    
    
    $("#sidM").click(function(){
        var sidStuff = document.getElementById("creCon");
        sidStuff.innerHTML = "<h3>Sid Meier</h3> <p class=\"pcon\">Sid Meier is a Canadian American game programmer and designer of many popular strategy simulation games most notably Civilization. Meier co-founded MicroProse in 1982 and is a director of creative development for Firaxis Games. <q class=\"quickInfo\">Sid Meier was born in Sarnai, Ontario, Canada. Meier graduated from Michigan university.</q> Meier has on many prestigious accolades in the gaming industry.</p> <p class=\"pcon\">Meier founded MicroProse with his partner Bill Stealey in 1982. MicroProse first developed simulation games such as Silent Service and f-19 Stealth fighter. In 1887 the company released Sid Meier's Pirates which began the trend of using Meier's name in the title of the games developed.</p> <p class=\"pcon\">After releasing F-19 stealth Fighter, Meier decided to work on strategy games. <q class=\"quickInfo\" style=\"float: left\">In 2011, the people search company PeekYou claimed that Meier has the largest digital footprint of any video game designer</q>  Taking cues from games like SimCity and Empire, Meier created Railroad Tycoon, and leter the game hi was most recognized for, Civilization, although he only designed the first installment. Meier left MicroProse and in 1996 founded Firaxis Games along with veteran game developer Jeff Bridges. Today Firaxis Games specializes in strategy games many of which are follow up to previous Meier's titles. In 1996 he developed  a system for Real-Time Music Composition and Synthesis.</p> <p class=\"pcon\">Meier is not always the head of a development project that carry his name. For example on games like Civilization 2, Alpha Centauri and Colonization the head developer was Brian Reynolds. On the game Civilization 3 Jeff Bridges was lead, Civilization 4  Soren Johnson was lead and on Civilization 5 Jon Shafer was Lead.</p>";
       
        
        $('#myModal').modal('toggle');
    
    
    });
    
    $("#richG").click(function(){
        var richStuff =  document.getElementById("creCon");
        richStuff.innerHTML = "<h3>Richard Garriott</h3> <p class=\"pcon\">Richard Garriott was born on July 4th, 1961 in Cambridge, England to American parents and was raised in Nassau Bay Texas. In 1977 Garriott attended a seven week computer camp at the University of Oklahoma. When introduced to his peers Garriott responded to their greeting of \"Hi\" with \"Hello\", his friends decided he sounded like he was from Britain so they nicknamed him \"Lord British\". Garriott carried the nickname with him throughout his career using it to name some of his characters such as Lord British from the Ultima series and General British from Tabula Rasa.</p> <p class=\"pcon\">In the summer of '79 Garriott began to work at a ComputerLand store where he got his first taste of creating a game, he created a game called Akalabeth. <q class=\"quickInfo\" style=\"float: left\">Something goes here</q> The owner of his store convinced him that his game would sell, so he printed up a cover sheet and a manual for Akalabeth, but them in ziplock bags and began to try and sell his game. Although it sold less than a dozen copies one of them made it to California Pacific, who signed a deal with Garriott helping Akalabeth sell over 30,000 copies.</p> <p class=\"pcon\">In the early 80s Garriott developed the Ultima series. Originally published by California Pacific sold again in zip lock bags to interested parties. The second iteration of the game was published by Sierra On-Line, as they were the only company willing to ship the game in a box. By the time the series had a third installment the games had a large following, such a large following Garriott and his brother formed Origin Systems, their own publishing company to handle the distribution of their titles.</p> <p class=\"pcon\">Garriott sold Origin to Electronic Arts in 1992. In 1997 Garriott coined the term MMORPG (Massively Multiplayer Online Role-Playing Game) giving a name to the previously unknown genre, Graphical MUD's. In the early 2000's EA canceled all of Garriots projects including Privateer Online and Harry Potter Online. As a result of these event Garriott parted ways with EA forming Destination Games which after the yearlong \"non-compete\" agreement  Garriott had with EA had ended, Destination Games merged with NcSoft and Garriott soon became CEO of NcSoft Austin.</p> <p class=\"pcon\">While at NcSoft Garriott developed Tabula Rasa, a futuristic sci-fi MMO. <q class=\"quickInfo\">something goes heres</q> Tabula Rasa was not a commercial success and in November, 2008 in a statement on the Tabula Rasa website, Garriott announced he would be leaving NcSOft to pursue other job opportunities. Later, however, Garriott claimed the letter was forged as a way to force him out of his job in which he had no intention of leaving. In February of 2009 NcSoft shut down live servers for Tabula Rasa.</p> <p class=\"pcon\">In July 2010 the Austin district Court awarded Garriott 28 million dollars in his suit against NcSoft, finding that the company did not appropriately handle his departure in 2008.</p> <p class=\"pcon\">Garriott founded yet another company in 2009, Polarium, which developed games for the budding social network market. The company will launch a spiritual successor to the Ultima series. On March 2008, Polarium launched a Kickstarter for Shroud of the Avatar. Polarium's objective is to create a story even more immersive than the Ultima series. SOTA is the first in a five game series. The estimated release date for Garriots new title is October , 2014.</p>";
        
        
        $('#myModal').modal('toggle');
    
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

