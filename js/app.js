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

//section for the Twitter API 
//I chose the FEMA twitter feeds, though I'd prefer to search by trend #; that could be next 

var endpoint =  "http://search.twitter.com/search.json?"
var params = ""
var url = endpoint + params


var USVIPR = "USVI or Puerto Rico"
var Florida = "Florida"
var Texas = "Texas or LA"

var place = $("#FEMA-submit")
console.log("place") //to test 


	if (place == USVIPR) {
		params = "FEMARegion2"; 

	} else if (place == Texas) {
		params = "FEMARegion6"; 
	 
	} else { 
		params = "FEMARegion4";
	}



$("#FEMA-submit").click(function() {
			
  	$.ajax({
    	url: endpoint + params,
    	dataType: 'jsonp',
    	success: function(data) {
    		console.log(data);
    		for (item in data['results']) {
          $('#tweets').append(
            '<li>' + data['results'][item]['text'] + '</li>');
        	};
   		}, 
   		error: function() {
       	$(".loading").html("The server doesn't seem to be working.");	
        }  
     })   
});

