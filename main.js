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
  studentlog = []

  alert("Please fill in the following information about each student:","");

  for (var i = 0; i < studentInput; i++) {
    var name= prompt("What is the name of id " + [i+1] + " student?","");
    var phone= prompt("What is the phone number of id " + [i+1] + " student?", "");
    var city= prompt("What city does id " + [i+1] + " student live?","");
    studentlog.push({"ID": i+1, "Name": name, "Phone Number": phone,"City": city});
    console.log(studentlog);
  };
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
  mentorlog = []
  alert("Please fill in the following information about each mentor:","");
  for (var i = 0; i < mentorInput; i++) {
    var name= prompt("What is the name of id " + [i+1] + " mentor?","");
    var phone= prompt("What is the phone number of id " + [i+1] + " mentor?", "");

    var city= prompt("What city does id " + [i+1] + " mentor live?","");
    mentorlog.push({"ID": i+1, "Name": name, "Phone Number": phone,"City": city});
    console.log(mentorlog);
  };
}


function phoneValidation () {
  if (typeof(parseInt(phone)) !=== "number" && phone.length === 10) {
    prompt("That is not a valid phone number. Please enter in only 10 numbers like so: 1234567890 with no special characters")
  } else {
    continue;

  }
}
