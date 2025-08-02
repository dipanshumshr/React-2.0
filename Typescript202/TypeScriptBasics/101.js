var username = "Dipanshu";
var rollNo = 24;
var isPresent = true;
console.log("".concat(username, " has a roll number ").concat(rollNo, " and his today attendence is ").concat(isPresent));
//Type inferences
var country = "India"; // TS can guess it’s a string
// country = 23 
// no initial value, so we must tell TS the type
var data = "dipanshu";
data = 23; // The any type is escape watch of types
var value = "Country";
value = 842002;
if (typeof value === "string") {
    console.log(value.toUpperCase());
}
