// jQuery to raw js http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/
// json needed format https://raw.githubusercontent.com/cherylcourt/resume/gh-pages/js/resumeBuilder.js
var formattedName = HTMLheaderName.replace("%data%", "Santhosh");
var formattedRole = HTMLheaderRole.replace("%data%", "Full Stack Developer");

//$("#header").append(formattedName + formattedRole);
document.getElementById("header").innerHTML += formattedName + formattedRole;
