$(document).ready(function(){function n(){$("#work_page").fadeOut()}function o(){$(".project_container").fadeOut()}$("#getBackToHome").on("click",function(){$("#home").fadeIn(),n()}),$("#open-work").on("click",function(){$("#work_page").fadeIn()}),$("#open-contact").on("click",function(){$("#about").fadeIn()}),$("#close-contact").on("click",function(){$("#about").fadeOut()}),$("#project_1").on("click",function(){o(),$("#project_ephemere").fadeIn()}),$("#project_2").on("click",function(){o(),$("#project_random").fadeIn()})});