$(document).ready(function(){

    var desktop = window.matchMedia("(min-width:768px)");
    if (desktop.matches){
        $(window).on('scroll',function(){
            if ($(window).scrollTop()){
                $('nav').addClass('fixed-top bg-light');
        
            }
            else 
            {
                $('nav').removeClass('fixed-top bg-light');
            }
        })
    }else{

    }
})
