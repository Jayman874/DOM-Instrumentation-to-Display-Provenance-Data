function jquery() {
    $.ajax({url: "http://localhost:3000/getData", success: function(result){
        $('#json').html(JSON.stringify(result, null, 2));
    }});
}

function jquery2() {
    $.ajax({url: "http://localhost:3000/getStats", success: function(result){
        $('#stats').html(result);
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
    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Set the appropriate content type
        },
        body: jsonData // Convert data to JSON format
    };
    fetch("http://localhost:3000/postData", requestOptions)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        document.getElementById("submit").innerHTML = "<pre>" + jsonData + " Submitted</pre>" 
    })  
}
