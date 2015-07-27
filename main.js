console.log("sanity check!");


//asking user how many students to log
var studentInput = prompt("What is the total number of students within your class learning JavaScript?");

//function that checks the user's input is valid
studentInputChecker();

//asking user how many mentors to log
var mentorInput = prompt("What is the total number of mentors for your class?");

//funtion that checks the user's input is valid
mentorInputChecker();



function studentInputChecker() {
  if ( parseInt(studentInput) > 0) {
    console.log(studentInput);
  } else if (parseInt(studentInput) === 0) {
    console.log("No students? Well dang...")
    return;
  }
  else {
    prompt("That is not a number. Please type a number for how many students within your class is learning JavaScript:");
  };
  studentLogger();
}

//function to log student info
function studentLogger() {
  studentLog = []

  alert("Please fill in the following information about each student:","");

  for (var i = 0; i < studentInput; i++) {
    var name= prompt("What is the name of id " + [i+1] + " student?","");
    var phone= prompt("What is the phone number of id " + [i+1] + " student?", "");
    var city= prompt("What city does id " + [i+1] + " student live?","");
    studentLog.push({"ID": i+1, "Name": name, "Phone Number": phone,"City": city});
    console.log(studentLog);
  };
  studentAppender();
  studentFiller();
}




function mentorInputChecker() {
  if ( parseInt(mentorInput) > 0) {
    console.log(mentorInput);
  } else if (parseInt(mentorInput) === 0) {
    console.log("No mentors? Well dang...")
    return;
  }
  else {
    prompt("That is not a number. Please type a number for how many students within your class is learning JavaScript:");
  };
  mentorLogger();
}

//function to log mentor info
function mentorLogger() {
  mentorLog = []
  alert("Please fill in the following information about each mentor:","");
  for (var i = 0; i < mentorInput; i++) {
    var name= prompt("What is the name of id " + [i+1] + " mentor?","");
    var phone= prompt("What is the phone number of id " + [i+1] + " mentor?", "");

    var city= prompt("What city does id " + [i+1] + " mentor live?","");
    mentorLog.push({"ID": i+1, "Name": name, "Phone Number": phone,"City": city});
    console.log(mentorLog);
  };
  mentorAppender();
  mentorFiller();
}


//this function appends "li" items to the "studentList" ul according to the length of the studentLog
function studentAppender() {
  //grab ul by id "studentList"
  var studentList = document.getElementById("studentList");
  //append "li" elements to "studentList"
  for (var i = 0; i < studentLog.length; i++) {
    var li = document.createElement("li");
    studentList.appendChild(li);
  };
}

//this function fills in the innerHTML of each li created with the information in the studentLog
function studentFiller() {
  var studentList = document.getElementById("studentList");
  for (var i = 0; i < studentLog.length; i++) {
    studentList.children[i].innerHTML = "ID: " + studentLog[i].ID + "<br> Name: " + studentLog[i].Name + "<br> Phone Number: " + studentLog[i]["Phone Number"] + "<br> City: " + studentLog[i].City + "<br><br>";
  };
}

//this function appends "li" items to the "mentorList" ul according to the length of the mentorLog
function mentorAppender() {
  //grab ul by id "mentorList"
  var mentorList = document.getElementById("mentorList");
  //append "li" elements to "mentorList"
  for (var i = 0; i < mentorLog.length; i++) {
    var li = document.createElement("li");
    mentorList.appendChild(li);
  };
}

//this function fills in the innerHTML of each li created with the information in the mentorLog
function mentorFiller() {
  //grab ul by id "mentorList"
  var mentorList = document.getElementById("mentorList");
  //covert innerHTML of "li" elements to match mentorlog
  for (var i = 0; i < mentorLog.length; i++) {
    mentorList.children[i].innerHTML = "ID: " + mentorLog[i].ID + "<br> Name: " + mentorLog[i].Name + "<br> Phone Number: " + mentorLog[i]["Phone Number"] + "<br> City: " + mentorLog.City + "<br><br>";
  };
}
