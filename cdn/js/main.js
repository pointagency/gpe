$(document).ready(function () {


    var screenTop;
    $('#modal-popup,#c-2-learn,#mp-close').click(function (e) {
        e.stopPropagation();

        if ($("#modal-popup").hasClass("mp-hide")) {
            screenTop = $(document).scrollTop();
            if ($(window).width() > 480 && ($('#mp-main').height() < $(window).height())) {
                $("#modal-popup").removeClass("mp-hide");
                $('#modal-popup').css('top', screenTop); /**/
                $("#modal-popup").addClass("mp-show");

                $('body').css('overflow', 'hidden');
                $("#modal-popup").css('height', $(window).height());
            }
            else {
                $("#modal-popup").addClass("mp-show");
                $('document').css('top', 0);
                $("#modal-popup").removeClass("mp-hide"); window.scrollTo(0, 0);
                $("#modal-popup").css('height', $(document).height()); 
                $("#modal-popup").removeClass("mp-hide"); 
            }

            return false;

        } else {


            $("#modal-popup").removeClass("mp-show");
            $("#modal-popup").addClass("mp-hide");
            $(document).scrollTop(screenTop);
            $('body').css('overflow', 'auto');

            return false;

        }

    });

    $(window).resize(function () {
        if ($("#modal-popup").hasClass("mp-show")) {
            $('#modal-popup').css('top', $(document).scrollTop());
        }
    });
    $('#modal-popup').children().bind('click', function (e) {
        e.stopPropagation();
    });



});