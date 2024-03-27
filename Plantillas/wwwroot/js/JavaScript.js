$(document).ready(function () {
/*$(function () {*/
    $("#boton").on({
        mouseenter: function () {
            $("#cuerpo").css("background-color", "lightgray");
        },
        mouseleave: function () {
            $("#cuerpo").css("background-color", "lightblue");
        },
        click: function () {
            $("#cuerpo").css("background-color", "yellow");
        }
    });
});