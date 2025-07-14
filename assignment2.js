1.In JavaScript there are seven primitive data types and these data types are basic and immutable. 
 1. Number : These datatype represents both the integer and floating Numbers 
      let item = 5;
      let price = 40.89;
      console.log(typeof item);
      console.log(typeof price); // the output in both cases is Number.
 
 2. String  : String is defined as sequence of characters . A string can be defined in ' ' or " "
     
    let a = "Abhinay";
    let b = "Dasari";
    let c = a + b; // string concatenation.
    console.log(c);

 3. Boolean : It represents either true or false. 
    let isLoggedIn = true;
    let hasAccess = false;
    console.log(isLoggedIn);
    console.log(hasAccess);   
 
 4. Undefined : A varigable that has been declared but not assigned value . 
     let a;
     console.log(a) //undefined because i am not assigned any value but only declared.
 
 5. Null : It represents empty value. 
     let a = null;
     console.log(a) 
    
 6. Symbol : It is used for unique identifiers present it is not used widely.
    let id = Symbol("userID");
    console.log(id);






2. In JavaScript, var, let, and const are used to declare variables, but they behave differently in terms of scope, hoisting, and mutability.
  1.var is the function-scope and hosited declared at the top the scope butnot initialize.
    In var we will redeclare and re assig the values.

    var x = 10; //declared and assigned
    var x = 20;
    console.log(x)
 2. Let is blocked scope and hoisted but not initialize we could not access before declartion it will through Error 
    in let we will declare and assign and reassign is possible but re-declare is not possible in the same scope. 
    let x = 20;
    let x = 10; // x = 10; it will re assign the value but re declartion is not possible
    console.log(x);

 3. const is the blocked scope when we declare and assignthe value it is constant we cant change the value 
    by redeclare and reassign in const.
      
    const x = 20;  // declare and assign once 
    console.log(x);

    const x= 40;
    const x = 60; // re declare and re assign is not possible.
    console.log(x);

3. undefined: A variable that is declared but not initialized
    let a;
    console.log(a);
  null: A value that is explicitly set to "nothing"
    let b = null;
   console.log(b);

4. output of the code is true.  

5. To declare a variable that cannot be reassigned in that case we will use const keyword.
   it is not possible to reassign the value the const keyword when try to change the it will 
   through a Error. 

   const a = 89.6
   a = 90.9
   console.log(a)

6.In javascript we check the datatype of a variable using the typeof.

 let name = "Abhinay";
 let age = 24;
 let isLoggedIn = false;

console.log(typeof name)
console.log(typeof age)
console.log(typeof isLoggedIn)

7.An object in JavaScript is a collection of key-value pairs, where the keys also called properties are strings or Symbols and the values can be any data types.
  let person = {
  name: "Abhinay",
  age: 24,
  isStudent: false
};

console.log(person);

8.In JavaScript, arrays and objects are both data structures used to store collections of values.
 let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); 
console.log(fruits.length); 

let person = {
  name: "Abhinay",
  age: 24,
  isStudent: false
};

console.log(person);

9. undefined   The variable a is declared using let, but it is not initialized.

10. let studentName = "Abhinay Dasari";   
let studentAge = 23;             
let hasPassed = true;            

console.log("Student Name:", studentName);
console.log("Student Age:", studentAge);
console.log("Has Passed:", hasPassed);



