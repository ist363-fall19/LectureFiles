
var name = "Bob"; // String
var age = 42; // Number
var siblings = ["Mary", "Sue", "John"]; // Array
var isWorking = true; // Boolean

function print(message) {
    document.write("<p>" + message + "</p>");
}


for (var i = 0 ; i < siblings.length ; i++) {
    print(siblings[i]);
}


var msg = name + " is " + age.toString() + " years old";
// print(msg); // Call function;

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

// alert(person.name);



