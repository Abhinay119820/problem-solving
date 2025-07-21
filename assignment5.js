1. let username = "abhinay Dasari";
   console.log(typeof username) // String

2. let x ;
   let y = null;
   console.log(typeof a);  // Output: "undefined"
   console.log(typeof b);  // Output: "object"
   let a;
   Variable a is declared but not assigned any value.So it defaults to undefined.typeof a returns "undefined".
   let b = null;
   Variable b is explicitly assigned null.typeof b surprisingly returns "object".

   
3. let x = 42;
   if (typeof x === "number") {  // typeof x === "number" checks if the type of x is "number".
    console.log("x is a number");
   }

4. let age = "18";
   let minAge = 18;

   console.log(age == minAge);   // true (loose equality, type conversion happens)
   console.log(age === minAge);  // false (strict equality, no type conversion)

5. let a = 10;
   let b = 20;
   if (a > b) {
    console.log("The greater number is: " + a);
   } else {
    console.log("The greater number is: " + b);
   }

6. let score = 45;
  if (score >=90){
    console.log("Excellent")
  }else if(score >=75){
    console.log("Good")
  }else if(score >=50){
    console.log("Average")
  }
  else{
    console.log("Below Average")
  }

7. let value = "";
   if(value === ""){
    console.log("Value is empty")
   }

8. let age = 18;

   let result = (age >= 18) ? "Eligible" : "Not Eligible";
   console.log(result);

9. let n = 17;
   if (n%2 == 0){
    console.log(n, "is even number")
   }else{
       console.log(n, "is odd number")
   }

10. let temp;

   if (typeof temp === "undefined") {
  console.log("Undefined");
  } else {
  console.log("Defined");
 } 

11. let x = null;
  if( x === "null"){
    console.log("Null Value")
  } else{
    console.log("Defined");
  }

12. let num = -42;
   if(num>0){
    console.log(num,"is positive")
   }else if(num<0){
    console.log(num,"is Negative")
   }else{
    console.log(num,"is Zero")
   }

13. let month = "May";

   if (month === "March" || month === "April" || month === "May") {
  console.log(month, "is Spring");
  } else {
  console.log(month, "is Not Spring");
  }

14. let temp = 25;
    if(temp>=20 && temp<=30){
        console.log("Comfartable")
    }else{
        console.log("unComfartable")
    }

15. let year = 2020;
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is Leap");
   } else {
    console.log(year, "is not Leap");
   }

16. let val;
    console.log(typeof val); // undefined //This declares the variable val without assigning it a value.
    val = 5;
    console.log(typeof val); // number // Now val holds a number.typeof val returns "number".
    val = "hello";
    console.log(typeof val); // string// Now val holds a string.

17. let data = 0;
    console.log(data ? "Truthy" : "Falsy");

18.  let person = { name: "Asha" };
     console.log(typeof person)//object

19. let price = NaN;
    if (isNaN(price)) {
   console.log("Not a Number");
   } else {
   console.log("Valid Number");
  }

20. let x = 15;
    if(x%3 === 0 && x%5===0){
        console.log("Divisible by 3 and 5")
    } else if(x%3 === 0){
         console.log("Divisible by 3")
    } else if(x%5 === 0){
        console.log("Divisible by 5")
    } else{
        console.log("Not Divisible by 3 or 5")
    }

21. let marks = 85;
    if (marks >= 75){
        console.log("Distinction")

    if (marks >= 90){
        console.log("Outstanding")
    }
    }


   