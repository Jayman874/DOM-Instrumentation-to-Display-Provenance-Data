function update() {
  var scripts = document.getElementsByTagName('script');
  var text = "document.getElementById(";
  for (let i = 0; i < scripts.length; i++){
    if (scripts[i].innerText.includes("new XMLHttpRequest()") || scripts[i].innerText.includes("$.ajax")){
      var parts = scripts[i].innerText.split(text);
      var index = parts.slice(1).toString().split(")");
      var codeURL = "document.getElementById(" + index[0] + ").url = xhr.responseURL; \n";
      var codeHeaders = "document.getElementById(" + index[0] + ").provenance = xhr.getAllResponseHeaders(); \n";
      var newText = parts[0] + codeURL + codeHeaders + text + parts.slice(1).join(text);
      var newScriptElement = document.createElement('script');
      newScriptElement.append(newText);
      scripts[i].parentNode.replaceChild(newScriptElement, scripts[i]);
    }
  }
}

function add() {
  let b = document.createElement('br');
  let details = document.createElement('details');
  let summary = document.createElement('summary');
  details.setAttribute("id", "stats");
  summary.innerText = "DOM Elements Manipulated by Ajax";
  document.body.append(b);
  document.body.appendChild(details).appendChild(summary);
  document.getElementById("stats").style.fontSize ="x-small";
}

update();
add();