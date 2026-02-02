// $("button").click(function(){
//     $("h1").css("color", "purple");
// })


// $(document).keypress(function(event){
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "purple");
// })

// $("h1").before("<button>new</button>")
// $("h1").after("<button>new</button>")

// $("h1").append("<button>new</button>")
// $("h1").prepend("<button>new</button>")

// $("button").click(function(){
//     $("h1").hide();
// })

// $("button").click(function(){
//     $("h1").show();
// })

// $("button").click(function(){
//     $("h1").toggle();
// })

// $("button").click(function(){
//     $("h1").fadeIn();
// })

// $("button").click(function(){
//     $("h1").fadeToggle();
// })

// $("button").click(function(){
//     $("h1").slideToggle();
// })

// $("button").click(function(){
//     $("h1").animate({opacity: 0.5});
// })

// $("button").click(function(){
//     $("h1").animate({margin:"20%"});
// })

$("button").click(function(){
    $("h1").slideUp().slideDown().animate({opacity:0.5});
})