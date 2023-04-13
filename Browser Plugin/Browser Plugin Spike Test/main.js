console.log("The extension is up and running");

var images = document.getElementsByTagName('img');

for (let i = 0; i < images.length; i++){
   var btn = document.createElement("button");
   btn.classList.add("Img_Button")
   btn.appendChild(document.createTextNode("Source"))
   let node = images[i].parentElement;
   console.log(node.nodeName);
   node.appendChild(btn);
   btn.onclick="location.href="+images[i].src;
   btn.style.position = "relative";
}
