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

    setTimeout(function () {
        $("#home").css("display", "block");
        TweenLite.fromTo(".home_image", 1.5, {yPercent: 80, opacity: 0}, {
            yPercent: 0,
            opacity: 1,
            ease: Power2.easeOut
        });
        TweenLite.fromTo(".heading", 1.5, {xPercent: 80, opacity: 0}, {xPercent: 0, opacity: 1, ease: Power2.easeOut});
    }, 0);


    $(".project_slide_num span").on('click', function (e) {
        setProjectActive(e.target.id);
    });


    var activeProject = 1;
    var canScroll = true;

    var goToProject1 = function () {
        canScroll = false;
        activeProject = 1;
        resetProjects();
        setProjectActive("project_1");
        $("#project_ephemere").fadeIn(400, function () {
            canScroll = true;
        });
    };

    var goToProject2 = function () {
        canScroll = false;
        activeProject = 2;
        resetProjects();
        setProjectActive("project_2");
        $("#project_different").fadeIn(400, function () {
            canScroll = true;
        });
    };
    var goToProject3 = function () {
        canScroll = false;
        activeProject = 3;
        resetProjects();
        setProjectActive("project_3");
        $("#project_hello").fadeIn(400, function () {
            canScroll = true;
        });
    };
    var goToProject4 = function () {
        canScroll = false;
        activeProject = 4;
        resetProjects();
        setProjectActive("project_4");
        $("#project_montgolfiere").fadeIn(400, function () {
            canScroll = true;
        });
    };
    var goToProject5 = function () {
        canScroll = false;
        activeProject = 5;
        resetProjects();
        setProjectActive("project_5");
        $("#project_veille").fadeIn(400, function () {
            canScroll = true;
        });
    };

    $("#project_1").on('click', goToProject1);
    $("#project_2").on('click', goToProject2);
    $("#project_3").on('click', goToProject3);
    $("#project_4").on('click', goToProject4);
    $("#project_5").on('click', goToProject5);
    
    $(window).bind('mousewheel', _.throttle(function (event) {

        if (canScroll == true) {
            if (event.originalEvent.wheelDelta <= -35) {

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
            else if (event.originalEvent.wheelDelta >= 35) {

                if (activeProject == 1) {
                    goToProject5();
                } else if (activeProject == 2) {
                    goToProject1();
                } else if (activeProject == 3) {
                    goToProject2();
                } else if (activeProject == 4) {
                    goToProject3();
                } else {
                    goToProject4();
                }
            }
        }

    }.bind(this), 350));


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
    }

    function setProjectActive(id) {
        $(".project_slide_num span").removeClass("active");
        $("#" + id).addClass("active");
    }

});
