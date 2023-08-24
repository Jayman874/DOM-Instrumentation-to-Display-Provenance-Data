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
            'Content-Type': 'application/json' // Set the appropriate content type
        },
        body: cookiesToJson() // Convert data to JSON format
    };
    fetch("http://localhost:3000/postData", requestOptions)
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        document.getElementById("title").innerHTML = "Lorem Ipsum";
    })  
}
