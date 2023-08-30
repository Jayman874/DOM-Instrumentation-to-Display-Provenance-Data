$(document).ready(function () {
  $("#login-link").click(function () {
      $("#login-popup").fadeIn();
  });

  $("#close-popup").click(function () {
      $("#login-popup").fadeOut();
  });

  $("#login-form").submit(function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the entered username and password
    var username = $("#username").val();
    var password = $("#password").val();

    // Here you can add your own logic to handle the username and password
    // For demonstration purposes, let's just log them to the console
    document.cookie = `username=${username}`;
    document.cookie = `password=${password}`;
    // Close the popup after processing
    $("#login-popup").fadeOut();
    $('#welcome').html('Welcome, ' + username + '!');
  });

});