// In lesson5.ts, try the following:

// Create a function calculateArea that takes length and breadth (both numbers) and returns the area.

// Create a function sayHello that takes a name (string) and an optional greeting (string).

// If greeting is not provided, default it to "Hi".

// Log: "Hi Dipanshu" or "Good Morning Dipanshu"

// Create a type alias OperationFn for a function that takes 2 numbers and returns a number.

// Then use it to define add, subtract, and multiply functions.

function calculateArea (length : number , breadth : number) : number
{
    return length * breadth ;
}

function sayHello (name : string , greeting ?: string)
{
    if(greeting)
    {
        console.log(`${greeting}`)
    }
    else
    {
        console.log(`${name} but no greeting`)
    }
}

type OperationFn = (a: number , b : number) => number;

const addition : OperationFn = (a , b) => {
    return a + b
}