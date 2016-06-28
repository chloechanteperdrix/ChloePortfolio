$(document).ready(function () {

    $(".getBackToHome").on('click', function () {
        console.log("clicked");
        $("#home").fadeIn();
        closeWork();
        closeAllProjects();
        console.log("clicked bis");
    });

    $(".open-work").on('click', function () {
        $("#work_page").fadeIn();
        closeAllProjects();
        closeHome();
    });

    $(".open-contact").on('click', function () {
        $("#about").fadeIn();
    });

    $("#close-contact").on('click', function () {
        $("#about").fadeOut();
    });

    $("#open-ephemere").on('click', function () {
        $("#ephemere").fadeIn();
        closeWork();
    });

    $("#open-hello").on('click', function () {
        $("#hello").fadeIn();
        closeWork();
    });

    $("#open-veille").on('click', function () {
        $("#veille").fadeIn();
        closeWork();
    });

    $("#open-different").on('click', function () {
        $("#different").fadeIn();
        closeWork();
    });

    $("#open-montgolfiere").on('click', function () {
        $("#montgolfiere").fadeIn();
        closeWork();
    });

    $("#close-contact").on('click', function () {
        $("#about").fadeOut();
    });


    //$("#titre_home_apparition").delay(3000).slideToggle("8000");

    //$("#loading").delay(2500).fadeOut("4000");
    $("#loading").delay(0).fadeOut("1000");

    setTimeout(function() {
        $("#home").css("display", "block");
        TweenLite.fromTo(".home_image", 1.5, {yPercent: 80, opacity: 0}, {yPercent: 0, opacity: 1, ease: Power2.easeOut});
        TweenLite.fromTo(".heading", 1.5, {xPercent: 80, opacity: 0}, {xPercent: 0, opacity: 1, ease: Power2.easeOut});
    }, 0);


    $(".project_slide_num span").on('click', function(e) {
        setProjectActive(e);
    });


    var activeProject = 1;

    var goToProject1 = function () {
        activeProject = 1;
        resetProjects();
        $("#project_ephemere").fadeIn();
    };

    var goToProject2 = function () {
        activeProject = 2;
        resetProjects();
        $("#project_different").fadeIn();
    };
    var goToProject3 = function () {
        activeProject = 3;
        resetProjects();
        $("#project_hello").fadeIn();
    };
    var goToProject4 = function () {
        activeProject = 4;
        resetProjects();
        $("#project_montgolfiere").fadeIn();
    };
    var goToProject5 = function () {
        activeProject = 5;
        resetProjects();
        $("#project_veille").fadeIn();
    };

    $("#project_1").on('click', goToProject1);
    $("#project_2").on('click', goToProject2);
    $("#project_3").on('click', goToProject3);
    $("#project_4").on('click', goToProject4);
    $("#project_5").on('click', goToProject5);

    var canScroll = true;

    $(window).bind('mousewheel', debounce(function(event) {

        if (canScroll == true) {
            canScroll = false;
            if (event.originalEvent.wheelDelta >= 75) {
                console.log('Scroll up');

                if (activeProject == 1) {
                    goToProject2();
                } else if (activeProject == 2) {
                    goToProject3();
                } else if (activeProject == 3) {
                    goToProject4();
                } else if (activeProject == 4) {
                    goToProject5();
                } else {
                    goToProject1();
                }
            }
            else if (event.originalEvent.wheelDelta <= -75) {
                console.log('Scroll down');

                if (activeProject == 1) {
                    goToProject5();
                } else if (activeProject == 2) {
                    goToProject4();
                } else if (activeProject == 3) {
                    goToProject3();
                } else if (activeProject == 4) {
                    goToProject2();
                } else {
                    goToProject1();
                }
            }
        }

        setTimeout(function() {
            canScroll = true;
        }.bind(this), 1000);

    }.bind(this), 250));




    // Fonctions utilitaires

    function closeWork() {
        $("#work_page").fadeOut();
    }

    function closeHome() {
        $("#home").fadeOut();
    }

    function resetProjects() {
        $(".project_container").fadeOut();
    }

    function closeAllProjects() {
        $(".project_page").fadeOut();
        console.log("test");
    }

    function setProjectActive(e) {
        $(".project_slide_num span").removeClass("active");
        $("#"+e.target.id).addClass("active");
    }



    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    };

});