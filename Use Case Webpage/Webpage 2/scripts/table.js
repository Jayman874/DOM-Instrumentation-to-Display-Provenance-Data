window.onload = (function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://localhost:3000/getData', true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var jsonData = JSON.parse(xhr.responseText);
            populateTable(jsonData);
        }
    };
    xhr.send();
});

function populateTable(teamData) {
    var teamContainer = document.getElementById("teamContainer");

    // Loop through the JSON data and create the HTML elements
    for (var i = 0; i < teamData.length; i++) {
      var member = teamData[i];
  
      var memberDiv = document.createElement("div");
      memberDiv.className = "w3-col l3 m6 w3-margin-bottom";
  
      memberDiv.innerHTML = `
        <img src="${member.imageSrc}" alt="${member.id}" style="width:100%">
        <h3>${member.name}</h3>
        <p class="w3-opacity">${member.email}</p>
        <p>${member.description}</p>`;
  
      teamContainer.appendChild(memberDiv);
    }
}