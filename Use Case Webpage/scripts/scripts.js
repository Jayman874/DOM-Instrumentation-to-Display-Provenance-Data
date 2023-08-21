function jquery() {
    $.ajax({url: "http://localhost:3000/getData", success: function(result){
      $('#json').html(JSON.stringify(result, null, 2));
    }});
}

function post() {
    const form = document.getElementById("form");
    const formData = new FormData(form);
    const formDataObj = {};

    formData.forEach((value, key) => {
        formDataObj[key] = value;
    });

    const jsonData = JSON.stringify(formDataObj);
    $.ajax({
        url: "http://localhost:3000/postData",
        type: "POST",
        contentType: "application/json",
        data: jsonData,
        success: function (_data) {
            $('#submit').prop('value', 'Form Submitted');
        },
        error: function (error) {
            console.error("Error:", error);
        }
    });
}
