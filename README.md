JavaScript Match Maker!
GOAL: Solidify understanding of JavaScript functions, conditionals, booleans, and data structures and practice your problem solving skills by creating a fun program to match students with mentors.

Setup

Create a new local project directory called "js-match-maker".
Add a local git repository.
Create a remote repository on Github.
Add a main.js file.
Add a simple console.log("sanity check!") in main.js to verify that it's included correctly.
Finally, add/commit to your local git repo, and then push your changes to Github.
Requirements

Ask (prompt) the user for the total number of students learning JavaScript
For each student, ask the user for their name, phone number, and city. Create an object for each person. Add each object to an array. BONUS: add validation.
Repeat steps 1 and 2 for mentors. Create a new array of objects. You should now have two arrays - one for students, the other for mentors.
Print (alert) the total number of students, the number of mentors, and each person nicely formatted like so:

Name: Michael Herman
Phone Number: 415-514-6584
City: Boulder
Refactor

Instead of asking for the number of students, start by obtaining the student info and then asking the user if s/he would like to add another student. Continue until the user says no, and then move on to mentors. The final output should be the same.
After the output, ask the user for a city name. Display all the mentors in that city.
Bonus

Instead of alerting the user with alert, add the results to the DOM. Need help? Review this article.

Bonus Two

Instead of promoting the user with prompt, perform the same actions as before with HTML forms.
