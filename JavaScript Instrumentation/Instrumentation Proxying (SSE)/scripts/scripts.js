function xml() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("xml").innerHTML = xhr.response;
        }
    }
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/2', true);
    xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    xhr.send(null);
}

function jquery() {
  $.ajax({url: "https://fakestoreapi.com/products/2", success: function(result){
    $('#jquery').html(JSON.stringify(result, null, 2));
  }});
}

async function getFetch() {
  const response = await fetch("https://dummyjson.com/products/3");
  const item = await response.json();
  document.getElementById("fetch").innerHTML = JSON.stringify(item, null, 2);
}

function updateDOM() {
  document.getElementById("dom").innerHTML = "DOM Updated";
}

function sse() {
  const evtSource = new EventSource("http://127.0.0.1:8000/event.php");
  evtSource.addEventListener('message', function(e) {
    document.getElementById("sse").innerHTML = JSON.stringify(e.data, null, 2);
  });
}