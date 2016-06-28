$(document).ready(function(){

    // FICHIER JAVASCRIPT

    $("#getBackToHome").on('click', function() {
        $("#home").fadeIn();
        closeWork();
    });

    $("#open-work").on('click', function() {
        $("#work_page").fadeIn();
        closeHome();
        closeProject();
    });

    $("#open-contact").on('click', function() {
        $("#about").fadeIn();
        closeHome();
        closeWork();
        closeProject();
    });

    $("#close-contact").on('click', function() {
       $("#about").fadeOut();
    });

    $("#open-ephemere").on('click', function() {
       $("#ephemere").fadeIn();
       closeWork();
    });

    $("#open-hello").on('click', function() {
       $("#hello").fadeIn();
       closeWork();
    });

    $("#open-veille").on('click', function() {
       $("#veille").fadeIn();
       closeWork();
    });

    $("#open-different").on('click', function() {
       $("#different").fadeIn();
       closeWork();
    });

    $("#open-montgolfiere").on('click', function() {
       $("#montgolfiere").fadeIn();
       closeWork();
    });

    $("#close-contact").on('click', function() {
       $("#about").fadeOut();
    });

    
    $("#titre_home_apparition").delay(3000) .slideToggle("8000");    

    $("#loading").delay(2500) .fadeOut("4000");
    
    $(window).load(function() {
    $("#loading").fadeOut("1000");
    });

    function closeWork() {
        $("#work_page").fadeOut();
    }

    
    function closeHome() {
        $("#home").fadeOut();
    }


    function resetProjects() {
       $(".project_container").fadeOut();
    }


    $("#project_1").on('click', function() {
        resetProjects();
        $("#project_ephemere").fadeIn();
    });

    $("#project_2").on('click', function() {
        resetProjects();
        $("#project_different").fadeIn();
    });

     $("#project_3").on('click', function() {
        resetProjects();
        $("#project_hello").fadeIn();
    });

      $("#project_4").on('click', function() {
        resetProjects();
        $("#project_montgolfiere").fadeIn();
    });


       $("#project_5").on('click', function() {
        resetProjects();
        $("#project_veille").fadeIn();
    });



});