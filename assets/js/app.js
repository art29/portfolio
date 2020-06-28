$(document).ready(function() {

    headerHeight = $(".mb-auto").height() + 37;

    document.getElementsByTagName("body")[0].style = "margin-top: "+headerHeight+"px";

    $(".nav .nav-link").on("click", function(){
        $(".nav").find(".active").removeClass("active");
        $(this).addClass("active");

        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
            || location.hostname == this.hostname)
        {

            var target = $(this.hash),
                headerHeight = $(".mb-auto").height() + 37; // Get fixed header height

            document.getElementsByTagName("body")[0].style = "margin-top: "+headerHeight+"px";

            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if (target.length)
            {
                $('html,body').animate({
                    scrollTop: target.offset().top - headerHeight
                }, 500);
                return false;
            }
        }
    });
});
