console.log("1. Math.random()");
// Definition:
// Generates a random decimal number between 0 (inclusive) and 1 (exclusive).
// Syntax:
// Math.random()
// Example:
// console.log(Math.random());


// 1️⃣ Math.random() (5 Questions)
// 1.Generate a random number between 0 and 1.
console.log(Math.random());


// 2.Generate a random decimal number between 0 and 10.
console.log(Math.random()*10);


// 3.Generate a random decimal number between 0 and 100.
console.log(Math.random()*100);

// 4.Generate a random integer between 1 and 10.
console.log(Math.floor(Math.random()*10)+1);

// 5.Generate a random integer between 1 and 50.
console.log(Math.floor(Math.random()*50)+1);






console.log("2. Math.round()");

// Definition:
// Rounds a number to the nearest whole number.
// Decimal 0.5 or more → rounds up
// Less than 0.5 → rounds down
// Syntax:
// Math.round(number)
// Example:
// Math.round(4.7); // 5
// Math.round(4.2); // 4




console.log("3. Math.floor()");
// Definition:
// Rounds a number down to the nearest whole number.
// Syntax:
// Math.floor(number)
// Example:
// Math.floor(4.9); // 4




console.log("4. Math.ceil()");

// Definition:
// Rounds a number up to the nearest whole number.
// Syntax:
// Math.ceil(number)
// Example:
// Math.ceil(4.1); // 5




console.log("5. Math.max()");
// Definition:
// Returns the largest number from a list of numbers.
// Syntax:
// Math.max(num1, num2, ...)
// Example:
// Math.max(10, 20, 30); // 30



console.log("6. Math.min()");

// ## Definition
// Returns the smallest number from a list of numbers.

// ## Syntax
// ```javascript
// Math.min(num1, num2, ...);
// ```




console.log("7. Number()");

// ## Definition
// Converts a value into a number.

// ## Syntax
// ```javascript
// Number(value);
// ```



console.log("8. parseInt()");

// ## Definition
// Converts a string into an integer (whole number).

// ## Syntax
// ```javascript
// parseInt(value);
// ```

console.log("9. parseFloat()");
 
// ## Definition
// Converts a string into a decimal (floating-point) number.

// ## Syntax
// ```javascript
// parseFloat(value);




console.log("10. Unary Plus (+)");

// ## Definition
// Converts a value (usually a string) into a number using the `+` operator.

// ## Syntax
// ```javascript
// +valu





// 🔢 JavaScript Number Problems

// 1. Round a Number Round the number 4.7 using Math.round().'
console.log(Math.round(4.7));


// 2. Ceil a Decimal Use Math.ceil() to round 5.3 up to the next whole number.
console.log(Math.ceil(5.3));




// 3. Floor a Decimal Use Math.floor() to round 8.9 down to the previous whole number.
console.log(Math.floor(8.9));


// 4. Generate a Random Number (0–1) Create a function that returns a random number between 0 and 1 using Math.random().
function num() {
    return Math.random()*1;
    
}
console.log(num());
;

// 5. Random Integer (0–9) Generate a random whole number between 0 and 9.
 console.log(Math.floor(Math.random()*10));
 


// 6. Random Integer (1–100) Generate a random integer between 1 and 100.
console.log(Math.floor(Math.random()*100)+1 );


// 7. Convert String to Integer Use parseInt() to convert the string "42" into a number.
console.log(parseInt("42"));

// 8. Convert String to Float Use parseFloat() to convert "3.14159" into a floating point number.
console.log(parseFloat("3.14159"));

// 9. Round User Input Take a number from a  input, round it, and display the result on the page.
function btn() {
 let num = document.querySelector("#num");
 let num1 = document.querySelector("#num1");
let value = parseFloat(num.value);
 let result = Math.round(value)
num1.innerHTML= result


}

// 10. Dice Simulato Simulate a 6-sided dice roll (returns a number between 1 and 6).
function btn() {
    let result = Math.floor(Math.random()*6 )+1;
    console.log(result);
    
}
btn();
// 11. Temperature Rounding Round a temperature value (e.g., 36.6) to the nearest integer using Math.round().
console.log(Math.round(36.6));


// 12. Ceil Shopping Price If the product price is $9.25, use Math.ceil() to charge the user $10.
console.log(Math.ceil( 9.25));






// 13. Parse and Add Convert two string numbers like "10" and "5.5" using parseInt() and  parseFloat() and add them.
let num1 = "10";
let num2 = "5.5";
let sum = parseInt(num1) + parseFloat(num2);
console.log(sum);







// 14. Random Even Number (2–20) Generate a random even number between 2 and 20.


function btn(){
console.log(Math.floor(Math.random() * 10) * 2+2 );
}
btn();



// 15. Check if Parsed Value is a Number Write a function that checks if parseInt(input) is a valid number (not NaN).
function num(params) {
let num = parseInt(params);    
}

// 16. Round All Prices in Array
// Given an array of prices with decimals, return a new array with all prices rounded.
// 17. Simulate Coin Toss
// Use Math.random() to simulate a coin toss that returns "Heads" or "Tails".
// 18. Random Integer within Range (Min–Max)
// Create a function that returns a random integer between any two numbers (inclusive).
// 19. Extract Number from Text
// Use parseFloat() to extract the number from "Total: 45.90 USD".
// 20. Round to Nearest 0.5
// Given a decimal number, round it to the nearest 0.5 (e.g., 4.3 → 4.5, 4.1 → 4.0).