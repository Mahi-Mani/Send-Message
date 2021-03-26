$(document).ready(function () {
  $("#send-btn").on("click", function () {
    console.log("send button clicked");
    var message = $("#message").val().trim();
    console.log(message);
  });
})