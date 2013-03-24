$(document).ready(function() {
  $("#choreContent").click(function() {
    var img = $("#choreContent").children("img");
    if(img.hasClass("state1")) {
       img.toggleClass("state1").toggleClass("state2").attr("src", "http://i.imgur.com/FxJU0ob.png");
    } else if(img.hasClass("state2")) {
      img.toggleClass("state2").toggleClass("state3").attr("src", "http://i.imgur.com/Tr1noKR.png");
    } else if(img.hasClass("state3")) {
      img.toggleClass("state3").toggleClass("state4").attr("src", "http://i.imgur.com/056n81X.png");
    } else if(img.hasClass("state4")) {
      img.toggleClass("state4").toggleClass("state5").attr("src", "http://i.imgur.com/zgfvVoc.png");
    }
  });
});