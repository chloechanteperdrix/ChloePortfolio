$(document).ready(function(){

    // FICHIER JAVASCRIPT

    $("#getBackToHome").on('click', function() {
        $("#home").fadeIn();
        closeWork();
    });

    $("#open-work").on('click', function() {
        $("#work_page").fadeIn();
    });

    $("#open-contact").on('click', function() {
        $("#about").fadeIn();
    });

    $("#close-contact").on('click', function() {
       $("#about").fadeOut();
    });


    function closeWork() {
        $("#work_page").fadeOut();
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
        $("#project_random").fadeIn();
    });



});