function start() {
  aboutInformation();
  setInterval(aboutInformation, 5000);
}

function aboutInformation() {
  $.ajax({url: "http://localhost:3000/getStats", success: function(result){
      $('#aboutText').html(result);
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
          'Content-Type': 'application/json'
        },
        data: jsonData // Convert data to JSON format
      };
      
      $.ajax({
        url: 'http://localhost:3000/postData',
        type: requestOptions.method,
        contentType: requestOptions.headers['Content-Type'],
        data: requestOptions.data,
        success: function(_data) {
          $('#submit').html("Form Submitted Successfully");
        },
        error: function(error) {
          console.error(error);
        }
      });
      form.reset();
}
