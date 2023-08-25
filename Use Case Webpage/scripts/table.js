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

function populateTable(data) {
  var tableBody = document.getElementById('data-table');
  data.forEach(function (item) {
      var row = document.createElement('tr');
      var idCell = document.createElement('td');
      idCell.textContent = item.id;
      var nameCell = document.createElement('td');
      nameCell.textContent = item.name;
      var emailCell = document.createElement('td');
      emailCell.textContent = item.email;
      
      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(emailCell);
      tableBody.appendChild(row);
  });
}