// 3 ways to declare a function

// 1st method to create a function
const printHelloWorld = function () {
    // activities inside the function block
    console.log("Hello");
    console.log("World");
};

printHelloWorld ();

// 2nd method to create a function
function printHelloWorld2 () {
    console.log("printHelloWorld")
    console.log("Hello");
    console.log("World 2! ");
}

printHelloWorld2(); // calls the printHelloWorld2 () function

// 3rd method the create a function (=> arrow notation)
const printHelloWorld3 = () => {
    console.log("Hello");
    console.log("World 3!");
};

printHelloWorld3();

/***************************************************************************************/

// function with a parameter

function printHelloWorld4(name) {
    console.log("Hello, " + name);
} // scope note: the variable name no longer exist when the function completes

printHelloWorld4("Antonio")
printHelloWorld4("Gonzalez")
printHelloWorld4("Pantoja")


// function with multiple parameters 
function printHelloWorld5(name1, name2, name3, name4, name5) {
    console.log(`Hello, ${name1}, ${name2}, ${name3}, ${name4}, ${name5}`); 
}

printHelloWorld5("Ronaldo", "Johan", "Halland", "Rodrygo", "Jonathan");

// string output options (single-quotes, double-quotes, and backticks)
console.log('Hello, ' + 'World!'); // completed the string output

/***************************************************************************************/

// function calling a function
function printHelloWorld6() {
    console.log("This is printHelloWorld6()");
    printHelloWorld6(); // calling a function inside another function
}

function printHelloWorld7() {
    console.log("This is printHelloWorld7");
    printHelloWorld6(); // calling a function inside another function
}

printHelloWorld7(); // prints both
// Uncommenting the line below will create infinite recursion
// printHelloWorld6(); // prints just 6

/***************************************************************************************/

// recursion

const factorial = n => {
    if (n <= 1) {
        return 1; // the "base case"
    }

    return n * factorial(n - 1); // recursive call
}; 

console.log(factorial(5));

/***************************************************************************************/

// return values
function sum(num1, num2) {
    console.log(num1 + num2); // prints the sum of num1 + num2 
}

function difference(num1, num2) {
    return num1 - num2; // returns the difference between num1 and num2
}

sum(2, 10);

let addTenToDifference = difference(10, 5) + 10;
console.log(addTenToDifference);
