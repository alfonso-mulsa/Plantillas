$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "https://dummyjson.com/quotes",
        dataType: "json",
        success: function (data) {
            $.each(data.quotes, function (i, item) {
                var row = "<tr>" +
                    "<td>" + item.id + "</td>" +
                    "<td>" + item.quote + "</td>" +
                    "<td>" + item.author + "</td>" +
                    "</tr>";
                $("#tablaPosts>tbody").append(row);
            });
        }, //End of AJAX Success function  
    });
    $.ajax({
        type: "GET",
        url: "https://jsonplaceholder.typicode.com/photos/",
        dataType: "json",
        success: function (data) {
            $.each(data, function (i, item) {
                //console.log(item.id);
                //console.log(item.title);
                //console.log(item.url);
                //console.log(item.thumbnailUrl);
                var row = "<tr>" +
                    "<td class='text-center align-middle'>" + item.id + "</td>" +
                    "<td class='align-middle'>" + item.title + "</td>" +
                    "<td class='text-center'><a href=" + item.url + " target='_blank'><img src=" + item.thumbnailUrl + " /></a>" + "</td>" +
                    "</tr>";
                $("#tablaPhotos>tbody").append(row);
            });
        }, //End of AJAX Success function
            });
});