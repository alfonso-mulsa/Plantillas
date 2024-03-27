$(document).ready(function () {
    $("#imgCabecera").click(function () {
        $("#cabecera").css("background-color", "pink");
    });

    $("#pie").on({
        mouseenter: function () {
            $(this).css("background-color", "black");
            $(this).css("color", "white");
        },
        mouseleave: function () {
            $(this).css("background-color", "orange");
            $(this).css("color", "black");
        }
    });
    $("#btnOcultarMostrar").click(function () {
        if ($("#imgAside").attr("style") == "display: none;") {
            $("#imgAside").show();
        } else {
            $("#imgAside").hide();
        }
    });

    $("body").css("background-color", "cyan");

    var resultado = 0;
    var operacion = "";
    var borrarResultado = true;

    $(".btnNumero").click(function () {
        let numero = $(this).val();
        let contenido = $("#entrada").val();
        $("#entrada").val(contenido + numero);
    });

    $(".btnOperacion").click(function () {
        let tipoOperacion = $(this).val();
        let contenido = $("#entrada").val();
        let numero = 0;
        if (contenido !== "") {
            numero = parseInt(contenido);
        };
        if (borrarResultado) {
            $("#resultado").text("");
            resultado = numero;
            operacion = "";
            borrarResultado = false;
        };
        switch (operacion) {
            case "suma":
                resultado += numero;
                break;
            case "resta":
                resultado -= numero;
                break;
        }
        switch (tipoOperacion) {
            case "+":
                operacion = "suma";
                $("#resultado").append(numero + "+");
                break;
            case "-":
                operacion = "resta";
                $("#resultado").append(numero + "-");
                break;
            case "=":
                borrarResultado = true;
                $("#resultado").append(numero + "=" + resultado);
                break;
            case "Limpiar":
                $("#resultado").text("");
                resultado = 0;
                operacion = "";
                borrarResultado = true;
                break;
        }
        $("#entrada").val("");
    });
});