var firstName = prompt("What's your First Name?");
var lastName = prompt("What's your Last Name?");
var age = prompt("What's your Age?");

var message = "You're full name is " + firstName + " " + lastName + "<br>You are " + age + " years old";

console.log(message);

$('#message').html("<p>" + message + "</p>");