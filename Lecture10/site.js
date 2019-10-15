
// Data types
var name = "Bob"; // String
var age = 42; // Number
var siblings = ["Mary", "Sue", "John"]; // Array
var isWorking = true; // Boolean


// Function Example
function print(message) {
    document.write("<p>" + message + "</p>");
}


for (var i = 0 ; i < siblings.length ; i++) {
    print(siblings[i]);
}

// String concat
var msg = name + " is " + age.toString() + " years old";

print(msg); // Call function;

// Complex Object
var person = {
    name: "Bob",
    age: 42,
    isWorking: false,
    work: function() {
        if (this.isWorking) {
            alert("Work " + this.name);
        } else {
            alert("Sleep " + this.name);
        }
    }
}

// if Statements
if (true) { // Condition
    // Do this
} else if (true) { // or some other condition
    // Do this
} else {
    // Do this
}


// Loops
for (var i = 0 ; i < length ; i++) {
    // do this over and over
}

// Event Listenter
var el = document.getElementById("MyButton")
el.addEventListener("click", function(evt) {
    // Do something when the event happens
})