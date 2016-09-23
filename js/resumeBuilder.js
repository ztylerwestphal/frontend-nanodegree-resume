var bio = {
  "name": "Zachary Westphal",
  "role": "Front End Web Developer",
  "contacts": {
    "mobile": "410-440-1121",
    "email": "ztylerwestphal@gmail.com",
    "github": "https://github.com/ztylerwestphal",
    "twitter": "@ztylerwestphal",
    "location": "Baltimore, MD"
  },
  "welcomeMessage": "Welcome to my resume.",
  "skills": ["javaScript",
  "HTML",
  "Angular.js",
  "Meteor",
  "MVC",
  "CSS",
  "jQuery"
  ],
  "biopic": "images/spoonface.jpg",
  "display": function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedMobile);
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedTwitter);
    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedBiopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcome);
    $("#header").append(HTMLskillsStart);
    bio.skills.forEach(function(skill) {
      var formattedSkill = HTMLskills.replace("%data%", skill);
      $("#skills").append(formattedSkill);
    });


  }
};


var education = {
  "schools": [{
    "name": "Helena High School",
    "location": "Helena, Mt",
    "degree": "Diploma",
    "majors": ["General"],
    "dates": "2001",
    "url": "http://hhs.helenaschools.org/"
  }, {
    "name": "CCBC",
    "location": "Essex, MD",
    "degree": "Pursuing Associate's Degree",
    "majors": ["Engineering"],
    "dates": "2015-Present",
    "url": "http://www.ccbcmd.edu/"
  }],
  "onlineCourses": [{
    "title": "Front End Nanodegree",
    "school": "Udacity",
    "dates": "2016",
    "url": "http://www.udacity.com"
  }],
  "display": function() {
    $("#education").append(HTMLschoolStart);
    education.schools.forEach(function(school) {
	 
      var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
	  formattedSchoolName = formattedSchoolName.replace("#", school.url);
      var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
      var formattedSchoolTitle = formattedSchoolName + formattedDegree;
      var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
      var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);

      $(".education-entry:last").append(formattedSchoolTitle);
      $(".education-entry:last").append(formattedLocation);
      $(".education-entry:last").append(formattedDates);
	  
      school.majors.forEach(function(major) {
        var formattedMajor = HTMLschoolMajor.replace("%data%", major);
        $(".education-entry:last").append(formattedMajor);
      });
    });
    $("#education").append(HTMLonlineClasses);
    $("#education").append(HTMLschoolStart);
    education.onlineCourses.forEach(function(course) {
      var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
      //$(".education-entry:last").append(formattedTitle);
      var formattedSchoolName = HTMLonlineSchool.replace("%data%", course.school);
      $(".education-entry:last").append(formattedTitle + formattedSchoolName);
      var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
      $(".education-entry:last").append(formattedDates);
      var formattedUrl = HTMLonlineURL.replace("%data%", course.url);
      $(".education-entry:last").append(formattedUrl);
    });
  }
};


var work = {
  "jobs": [{
    "employer": "Guitar Center",
    "title": "Guitar Sales",
    "location": "Towson MD",
    "dates": "2004-2009",
    "description": "Sell guitars."
  }, {
    "employer": "Guitar Center",
    "title": "Guitar Repair Tech",
    "location": "Towson MD",
    "dates": "2009-2012",
    "description": "Fix the guitars."
  }, {
    "employer": "Guitar Center",
    "title": "Repair Services Tech Support Supervisor",
    "location": "Towson MD",
    "dates": "2012-2015",
    "description": "Hire, train, and manage the guitar techs for the country."
  }],
  "display": function() {
    for (var job = 0; job < work.jobs.length; job++) {
      $("#workExperience").append(HTMLworkStart);

      var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
      var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
      var formattedEmployerTitle = formattedEmployer + formattedTitle;
      var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
      var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
      var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

      $(".work-entry:last").append(formattedEmployerTitle);
      $(".work-entry:last").append(formattedDates);
      $(".work-entry:last").append(formattedLocation);
      $(".work-entry:last").append(formattedDescription);
    }
  }
};

var projects = {
  "projects": [{
    "title": "Project 1",
    "dates": "2016",
    "description": "This is a project.",
    "images": [
    "images/fry.jpg",
    "images/fry.jpg",
    "images/fry.jpg",
    ]
  }, {
    "title": "Project 2",
    "dates": "2016",
    "description": "This is a project.",
    "images": [
    "images/fry.jpg",
    "images/fry.jpg",
    "images/fry.jpg",
    ]
  }, {
    "title": "Project 3",
    "dates": "2016",
    "description": "This is a project.",
    "images": [
    "images/fry.jpg",
    "images/fry.jpg",
    "images/fry.jpg",
    ]
  }],
  "display": function() {
    projects.projects.forEach(function(project) {
      $("#projects").append(HTMLprojectStart);
      var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
      $(".project-entry:last").append(formattedTitle);
      var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
      $(".project-entry:last").append(formattedDates);
      var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry:last").append(formattedDescription);
      project.images.forEach(function(img) {
        var image = HTMLprojectImage.replace("%data%", img);
        $(".project-entry:last").append(image);
      });
    });
  }
};




/*if (bio.skills.length > 0){
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
}*/

//var displayWork = function(){


//};
education.display();
work.display();
projects.display();
bio.display();
$("#mapDiv").append(googleMap);
var inName = function(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0, 1).toUpperCase() +
  name[0].slice(1).toLowerCase();
  console.log(name[0] + " " + name[1]);

};
inName("Zachary Westphal");
//$("#main").append(internationalizeButton);
