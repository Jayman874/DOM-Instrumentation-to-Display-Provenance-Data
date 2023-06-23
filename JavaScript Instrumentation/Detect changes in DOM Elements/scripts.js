function displayJ(){
    $.ajax({url: 'https://jsonplaceholder.typicode.com/todos/1', success: async function(result, status, request){
      document.getElementById('jquery').provenance = request.getAllResponseHeaders();
      var json = JSON.stringify(result);
      document.getElementById("jquery").innerHTML = json;
    }})
}

function display() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("xml").provenance = xhr.getAllResponseHeaders();
            document.getElementById("xml").innerHTML = xhr.response;
        }
    }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/2', true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(null);
}

function displayFetch() {
    fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then(response => {
          let next = response.headers.entries().next();
          document.getElementById("xml").provenance = next.value;
          document.getElementById("xml").innerHTML = response.text();
      });
}

function display2() {
    document.getElementById("text").innerHTML = "DOM Element Updated";
}

