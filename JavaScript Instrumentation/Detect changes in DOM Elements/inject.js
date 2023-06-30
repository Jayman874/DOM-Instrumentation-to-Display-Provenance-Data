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


update();