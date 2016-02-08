$(function() {
  $("h1").click(function() {
    alert("this is a header.");
  });

  $("h2").click(function() {
    alert("this is a second header.")
  });

  $(".clickable").click(function() {
    $("#initially-showing").toggle();
    $("#initially-hidden").toggle();
  });

  $("img").click(function() {
    alert("this is an image.");
    $("img").fadeIn();
  });

});


