/*var navbar = $("<navbar>");

var title = $("<h1>");
		title.html("Get Back Home");

var home = ("<link>");
		home.attr({"href":"http://www.google.com/"});
		home.html("Home");

var about = ("<link>");
		about.attr({"href":"http://www.google.com/"});
		about.html("About");

var contact = ("<link>");
		contact.attr({"href":"http://www.google.com/"});
		contact.html("Contact Us");

$("navbar").append(title, home, about, contact);
$("body").append("navbar");*/

//login-signup form toggle
$("#signup").hide();

$("#login-toggle").click(function(){
  $("#login").hide().attr("formnovalidate");
  $("#signup").toggle();
});

$("#signup-toggle").click(function(){
  $("#signup").hide().attr("formnovalidate");
  $("#login").toggle();
});

