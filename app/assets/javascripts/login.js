
$(document).ready(function() {
  $("#loginForm").submit(function() { return false });
  $("#username").val("Username");
  $("#username").css({ 'color' : '#999' });
  $("#username").focus(function() {
    if($(this).val() == "Username") {
      $(this).val("");
    }
    $(this).css({ 'color' : '#000' });
  });
  $("#username").blur(function() {
    $(this).css({ 'color' : '#999' });
  });
  
  $("#password").val("randompasswordjibberjabber");
  $("#password").css({ 'color' : '#999' });
  $("#password").focus(function() {
    $(this).val("");
    $(this).css({ 'color' : '#000' });
  });
  $("#password").blur(function() {
    $(this).css({ 'color' : '#999' });
  });
});