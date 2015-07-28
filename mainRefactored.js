console.log("sanity check!");


///////////////////////////////////////////students//////////////////////////////////////////////

//grab ul section withing HTML that will be used in the appender function
var studentList = document.getElementById("studentList");

//container to hold logs
var studentLog = [];

////asking user how many students to log
var studentInput = prompt("What is the total number of students within your class learning JavaScript?");

//function that checks the student input is valid
inputChecker(studentInput, "students");

//function that logs student inforamtion
logger(studentInput, "student", studentLog);

//function that creates "li" elements within ul "studentBox" in html according to how many studentInputs there is, then transfers the information from the mentor's log to the "li" innerHTML
appender(studentList, studentLog);



///////////////////////////////////////////mentors//////////////////////////////////////////////

var mentorList = document.getElementById("mentorList");

var mentorLog = [];

var mentorInput = prompt("What is the total number of mentors for your class?");

inputChecker(mentorInput, "mentors");

logger(mentorInput, "mentor", mentorLog);

appender(mentorList, mentorLog);





///////////////////////////////////////////functions//////////////////////////////////////////////

//function to check if user input is valid
function inputChecker(input, string) {
  //converting student input to an integer
  if (parseInt(input) > 0) {
  } else if (parseInt(input) === 0) {
    alert("No" + string + "? Well dang...")
    return;
  }
  else {
    prompt("That is not a number. Please type a number for how many " + string + " are in your class:")
  };
}



//function to log information into an object array
function logger(input, string, log) {
  //container to hold student information
  alert("Please fill in the following information about each " + string + ":");
  //loop through the number of students and ask each question:
  for (var i = 0; i < input; i++) {
    var name= prompt("What is the name of id " + [i+1] + " " + string + "?");
    var phone= prompt("What is the phone number of id " + [i+1] + " " + string + "?");
    var city= prompt("What city does id " + [i+1] + " " + string + " live?");
    log.push({"ID": i+1, "Name": name, "Phone Number": phone,"City": city});
    console.log(log);
  };
  return log;
}



//function that creates "li" elements within ul section in html according to the length of the log, then transfers the information from the log to the "li" innerHTML
function appender(list, log) {
  for (var i = 0; i < log.length; i++) {
    //below appends "li" items to the "studentList" or "mentorList" ul according to the length of the studentLog or mentorLog
    var li = document.createElement("li");
    list.appendChild(li);
    //below fills in the innerHTML of each li created with the information in the studentLog or mentorLog
    list.children[i].innerHTML = "ID: " + log[i].ID + "<br> Name: " + log[i].Name + "<br> Phone Number: " + log[i]["Phone Number"] + "<br> City: " + log[i].City + "<br><br>";
  };
}
