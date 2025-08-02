let username : string = "Dipanshu";

let rollNo : number = 24

let isPresent : Boolean = true

console.log(`${username} has a roll number ${rollNo} and his today attendence is ${isPresent}`)

//Type inferences

let country = "India"  // TS can guess it’s a string

// country = 23 

// no initial value, so we must tell TS the type

let data : any = "dipanshu" 

data = 23  // The any type is escape watch of types


let value : unknown = "Country"

value = 842002

if (typeof value === "string") {
  console.log(value.toUpperCase());
}
