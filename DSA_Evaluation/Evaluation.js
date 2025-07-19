1. let age = 23;
   console.log(typeof age);

2. let price = "150";
   let numPrice = Number(price);//converting String to number using type Converson.
   console.log(numPrice);

3. let num1 = 10;
   let num2 = 5;
   let sum = num1 + num2;
   let difference = num1 - num2;
   let product = num1 * num2;
   let quotient = num1 / num2;
   console.log("Sum:", sum);           // Output: 15
   console.log("Difference:", difference); // Output: 5
   console.log("Product:", product);       // Output: 50
   console.log("Quotient:", quotient);     // Output: 2

4. // it is string indexing question.

5. let a = 20;
   let b ="5";
   let c = 2;
   b = Number(b) // convert string to number
   let result = a + b + c;
   console.log("Result:", result);


6. let score;  // here declared not assigned
   console.log(score, typeof score); // undefined
   score = 50; // here i assigned a value 
   console.log(score, typeof score); // 50, number



7. var a = 10;
   console.log(a);// 10
   var a = 40; // reassignment and re declartion allowed in var
   console.log(a) // after re declartion and re assignment the output is 40.
   // let 
   let x = 20;
   console.log(x) // 20
   x = 30; // reassignemnt is allowed
   console.log(x) // 30
   let x = 50; // it will through because x is alread declared let does ot allow redeclartion.
   // const
   const z = 60;
   console.log(z)//60
   z = 70; // error because the value whic is given variable is const so it is not allowed to re assign.
   const z = 90; // re declartion is also not allowed in const.
////////////////////

8. let base = 10;
   let height = "5";
   height = Number(height);

   area = 0.5 * base * height;

   console.log(area);
////////////////////

9. let marks = "85"; // string
   marks = Number1(marks); // convert to number
   let total = marks + 15;//Added 15
   console.log(total); // 100


10. let message = "Hello, World!";  // Initially a string
    message = 42;                   // Reassigned to a number
    console.log(message);           //  42
    console.log(typeof message);    //  number

11. let text = "123abc";
    let assign = Number(text);
    console.log(assign);         // NaN
    console.log(typeof assign);  // number