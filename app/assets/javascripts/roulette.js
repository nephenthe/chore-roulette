$(document).ready(function() {
  var $elie = $("#mainContent img"), degree = 0, timer;
  function rotate() {
    $elie.css({ WebkitTransform : 'rotate(' + degree + 'deg)' });
    $elie.css({ '-moz-transform' : 'rotate(' + degree + 'deg)' });
    timer = setTimeout(function() {
      ++degree; rotate();
    });
  };
  $("#mainContent").click(function() {
    var img = $(this).children("img");
    if(img.hasClass("shifted")) {
      clearTimeout(timer);
      img.css({ WebkitTransform : 'rotate(0deg)' });
      img.css({ '-moz-transform' : 'rotate(0deg)' });
      img.attr("src", "http://i.imgur.com/IXus9dY.png");
      /* REPLACE HREF WITH LOCATION CHORE PAGE */
      $("#begin").html('<a href="http://0.0.0.0:3000/chores">START!</a>');
    } else {
      img.attr("src", "http://i.imgur.com/WCxbdeR.png");
      img.toggleClass("shifted");
      $("#begin").html("<p>Tap to select random task</p>");
      rotate();
    }
  });
});