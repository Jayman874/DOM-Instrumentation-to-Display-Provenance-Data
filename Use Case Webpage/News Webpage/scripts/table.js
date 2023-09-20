$(document).ready(function() {
  $.ajax({
      url: 'http://localhost:3000/getData',
      type: 'GET',
      dataType: 'json',
      success: function(jsonData) {
          populateTable(jsonData);
      },
      error: function(xhr, status, error) {
          console.error("Error: " + error);
      }
  });
});

async function populateTable(teamData) {
    var teamContainer = document.getElementById("teamContainer");

    // Loop through the JSON data and create the HTML elements
    for (var i = 0; i < teamData.length; i++) {
      var member = await teamData[i];
  
      var memberDiv = document.createElement("div");
      memberDiv.className = "w3-col l3 m6 w3-margin-bottom";
  
      memberDiv.innerHTML = `
        <h3>${member.name}</h3>
        <p class="w3-opacity">${member.email}</p>
        <p>${member.description}</p>`;
  
      teamContainer.appendChild(memberDiv);
    }
}