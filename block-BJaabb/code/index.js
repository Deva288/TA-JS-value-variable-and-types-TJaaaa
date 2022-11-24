/* 1. Do the following

1. Declare a variable `user` and take the name using `prompt`. Display the value stored in `user` using `alert`.
2. Now copy the value of `user` into a new variable named `userName`. Log the value of both `user` and `userName` using `console.log`.
3. Declare variable `age` and `isLearning` with value `22` and `true` in the same line. hint: declaring multiplemvariable in one line.
4. Now change the value of `user` to `John` and log the value of both `user` and `userName`.
*/
let user = prompt("Enter your name?");

alert(user);
let userName = user;

console.log(user, userName);
let age = 22, isLearning = true;
 
user = "John";

console.log(user, "user", userName, "userName");

/* 2.
Use `prompt` to take two numbers from user and store it in variable `numA` and `numB`. Create a third variable called `sum`, using `+` operator add numA and numB , store it in varible `sum` and using alert display `sum` in browser.
*/
let numA = +prompt("Enter first number");
let numB = +prompt("Enter second number");
let sum = numA + numB;

alert(sum);

// Loops

// 3. Complete the following code to make the output be 0 2 4 6 8 10?

for (let j = 0; j <= 10; j = j+2) {
    console.log(j);

}

// 4. Print the odd numbers from 9 to 1 (both inclusive) using a for loop.

for (let i = 9; i >= 1; i--) {
   if (i % 2 != 0) {
    console.log(i);
   }
}
// 5. Concat all the numbers from 5 to 0 (both inclusive) in descending order using a while loop. (543210)

let finalString = "";
let initialValue = 5;

while (initialValue >= 0) {
    finalString += initialValue;
    initialValue--;
}

console.log(finalString);

// 6. Concat all the even numbers from 10 to 0 (both inclusive) in descending order using a while loop. (1086420)

let finalEvenString = "";
let initialEvenValue = 10;
while (initialEvenValue >= 0) {
    if (initialEvenValue % 2 === 0) {
        finalEvenString += initialEvenValue;
    }
    initialEvenValue--;
}

console.log(finalEvenString);

// Comparisoin

/* 7. Take two value using prompt and store them in variables `num1` and `num2`. Check whether they are equal or not.

- `alert` true or false base on the entered value.
- if the input value is anything like `true`, `null` or `undefined` alert saying `Enter a valid value`.


Example:

21, 21; // true
"hello", -21; // false

*/
let num1 = +prompt("Enter num one");
let num2 = +prompt("Enter num two");

if (isNaN(num1) || isNaN(num2)) {
    alert("Enter avalid value!");
} else {
    alert(num1 === num2);
}