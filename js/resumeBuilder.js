// jQuery to raw js http://www.sitepoint.com/jquery-vs-raw-javascript-1-dom-forms/
// json needed format https://raw.githubusercontent.com/cherylcourt/resume/gh-pages/js/resumeBuilder.js
var bio = {
	"name": "Santhosh Vaiyapuri",
	"role": "Full Stack Developer",
	"contacts": {
		"email": "santhoshvai@gmail.com",
		"github": "santhoshvai",
		"twitter": "@santhoshvai",
		"location": "Eindhoven, The Netherlands"
	},
	"picture": "images/me.jpg",
	"welcomeMessage": "Howdy! I am a Software developer. Look around this page for more.",
	"skills": ["Java", "Python", "Algorithms + Datastructures", "HTML + CSS", "Javascript"]
};
var work = {
	"jobs": [
		{
			"employer": "ICT.eu",
			"title": "Software developer",
			"location": "Eindhoven, The Netherlands",
			"datesWorked": "Sep 2014 – Current",
			"description": "Development of Calibration, performance measure and diagnostics software in Python and C for ultraviolet level sensors. "			
		},
		{
			"employer": "ASML",
			"title": "Intern",
			"location": "Eindhoven, The Netherlands",
			"datesWorked": "Nov 2013 - Aug 2014",
			"description": "Automated development of models to simulate servo control applications using Java."		
		},
		{
			"employer": "PHILIPS",
			"title": "Intern",
			"location": "Eindhoven, The Netherlands",
			"datesWorked": "Jun 2013 - Aug 2013",
			"description": "Proposed usage of open source imaging libraries in C++/Java with UML models of software tools for MRI imaging software development in the future. "		
		},
		{
			"employer": "COGNIZANT",
			"title": "Front end developer",
			"location": "Eindhoven, The Netherlands",
			"datesWorked": "Jun 2013 - Aug 2013",
			"description": "Redesigned a web application for mobile responsiveness that was used internally for publishing employee ratings."		
		}
	]
};
var education = {
	"schools": [
		{   
			"name": "Eindhoven University of Technology",
			"graduated": "Aug 2014",
			"location": "The Netherlands",
			"degree": "Master of Science, Embedded Systems – software specialization"
		},
		{   
			"name": "Anna University",
			"graduated": "Aug 2014",
			"location": "India",
			"degree": "Bachelor of Engineering, Electronics and communication"
		}		
	],
	"onlineCourses": [	
		{ "school": "Udacity",
			"title": "Web Development",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};
var projects = {
	"projects": [
		{
			"title": "Web Development Wiki",
			"description": "Created an online wiki and blog for Udacity's Web Development Course.",
			"images": ["images/web.jpg"],
			"url": "https://github.com/santhoshvai/cs253-Web_Development-Udacity"
		}
	]
};
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.picture);
var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

var formattedContactInfo = [];
formattedContactInfo.push(HTMLemail.replace("%data%", bio.contacts.email));
formattedContactInfo.push(HTMLgithub.replace("%data%", bio.contacts.github));
formattedContactInfo.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
formattedContactInfo.push(HTMLlocation.replace("%data%", bio.contacts.location));

var headerElem = document.getElementById("header");
headerElem.innerHTML += formattedName;
headerElem.innerHTML += formattedRole;
headerElem.innerHTML += formattedBioPic;
headerElem.innerHTML += formattedWelcomeMsg;

if (bio.skills.length > 0) {
	headerElem.innerHTML += HTMLskillsStart;
	var skillsElem = document.getElementById("skills");
	for(i in bio.skills) {
		skillsElem.innerHTML += (HTMLskills.replace("%data%", bio.skills[i]));
	}
}

if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for(i in work.jobs) {
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var formattedDatesWorked = HTMLworkDates.replace("%data%", work.jobs[i].datesWorked);
			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			var formattedEmployerWorkTitle = formattedEmployer + formattedWorkTitle;
			$(".work-entry:last").append(formattedEmployerWorkTitle);
			$(".work-entry:last").append(formattedWorkLocation);
			$(".work-entry:last").append(formattedDatesWorked);
			$(".work-entry:last").append(formattedWorkDescription);
		}

	}
//$("#header").append(formattedName + formattedRole);
//document.getElementById("header").innerHTML += formattedName + formattedRole;

