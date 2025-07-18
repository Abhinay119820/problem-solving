1.let name = "Abhinay Dasari";
let age = 23;
let IsValid = false;
let a = { name: "Dhoni" };
let x;

console.log(name, typeof name); // abhinay Dasari 'string'
console.log(age, typeof age);           // 23 'number'
console.log(IsValid, typeof IsValid);   // false 'boolean'
console.log(a, typeof a);               // { name: 'Dhoni' } 'object'
console.log(x, typeof x);               // undefined 'undefined'

2. // Ask the user to enter two numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Convert the input strings to numbers
num1 = Number(num1);
num2 = Number(num2);

// Add the numbers
let sum = num1 + num2;

// Display the result
alert("The sum is: " + sum);

3. let counter = 10;
counter += 5;
console.log("After adding 5:", counter); // 15
counter -= 5;
console.log("After subtracting 2:", counter); //13  here counter become 15 so 15-2 = 13
counter *= 5;
console.log("After multiplying by 3:", counter); // 39 now here counter became 13 so 13 * 3 = 39.
counter /= 5;
console.log("After dividing by 2:", counter); // 19.5 here couner became 39 so 39/2 =19.5.

4. let a = 10;
   let b = 15;
console.log(a==b);    // false → values are not equal
console.log(a === b);  // false → values and types are not equal
console.log(a != b);   // true  → values are not equal
console.log(a !== b);  // true  → values or types are not equal
console.log(a > b);    // false → 10 is not greater than 15
console.log(a < b);    // true  → 10 is less than 15
console.log(a >= b);   // false → 10 is not greater than or equal to 15
console.log(a <= b);   // true  → 10 is less than or equal to 15

5. let a = true;
   let b = false;
   let c = true;

// Expression 1: Logical AND (&&)
console.log("a && c =", a && c); // true && true = true

// Expression 2: Logical OR (||)
console.log("a || b =", a || b); // true || false = true

// Expression 3: Combination of NOT (!) and AND (&&)
console.log("!b && a =", !b && a); // !false && true = true && true = true

6. let num = prompt("Enter the first number:");
num = Number(num); // Convert input from string to number

if (num % 2 == 0) {
    console.log(num, "is an even number");
} else {
    console.log(num, "is an odd number");
}

7. let x = 5;
   let y = 7;
console.log("Before swapping:");
console.log("x =", x); // x =5
console.log("y =", y);// y = 7

 let z = x; // here i am storing x in z
x = y;   // assigning y value to x.
y = z;  // Assign z to y

console.log("After swapping:");
console.log("x =", x); // x = 7
console.log("y =", y); // y =5

8. let age = prompt("Enter your Age");
   age = Number(age);
   if(age < 18){
      console.log("Minor");
   }
   else if (age >= 18 && age <= 59) {
      console.log( "Adult")
   }
   else{
      console.log("Senior" )
   }


9.console.log("5" == 5);    // Loose equality 
  console.log("5" === 5);   // Strict equality

  Output: true  JavaScript converts the string "5" to the number 5 automatically.
          false   Here, JavaScript checks both value and type."5" is a string, 5 is a number .Since the types are different


          
10. let result = (10 > 5) && (5 < 3) || !(2 == 2);
tep 1: Parentheses first
Evaluate individual comparisons:

(10 > 5) → true
(5 < 3) → false
(2 == 2) → true
So the expression becomes:
let result = true && false || !true;
 Step 2: Logical NOT !
!true → false
Now the expression becomes:
let result = true && false || false;
Step 3: Logical AND &&
true && false → false
Now the expression becomes:
let result = false || false;
 Step 4: Logical OR ||
false || false → false
Final Output:
javascript
Copy
Edit
console.log(result); // Output: false