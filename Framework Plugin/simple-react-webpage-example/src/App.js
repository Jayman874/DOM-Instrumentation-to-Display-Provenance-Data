import React from 'react';
import './App.css';
import $ from 'jquery';

function App() {
  function xml() {
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function() {
          if (xhr.readyState === XMLHttpRequest.DONE) {
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
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Simple React Webpage</h1>
        <p>This is a basic React webpage created using Create React App.</p>
        <main>
          <p id="xml">XML</p>
          <button onClick={xml}>Click</button>
          <p id="jquery">JQuery</p>
          <button onClick={jquery}>Click</button>
          <p id="fetch">Fetch</p>
          <button onClick={getFetch}>Click</button>
          <p id="dom">No Ajax</p>
          <button onClick={updateDOM}>Click</button>
        </main>
      </header>
    </div>
  );
}

export default App;