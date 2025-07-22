1 // Even or odd
    let x = prompt("Enter your number"); // asking for user input
    x = Number(x);                      // convert string to number
    if(x % 2 == 0){                    // here i am checking condition that my x value is divisible by 2 or not
        console.log(x, "is Even number") // it is divisible by 2 then it is even number
    }else{                              
        console.log(x, "is ODD number") //it is not divisible by 2 then it is ODD number
    }

2. // Grade Calculator.
    let marks = prompt("Enter your Marks"); 
    marks = Number(marks);
    if(marks >= 90){
        console.log("A Grade" )
    }
    else if(marks >= 80){
        console.log("B Grade" )
    }
    else if(marks >= 70){
        console.log("C Grade" )
    }
    else if(marks >= 60){
        console.log("D Grade" )
    }
    else{
        console.log("F" )
    }

3. //Leap Year Checker
     let year = prompt("Enter the year");  // Get the input from the user
     year = Number(year);                  // Convert the input to a number
    if (isNaN(year) || year <= 0) {
    console.log("Please enter a valid year.");
    } else if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year, "is a Leap year");
    } else {
    console.log(year, "is not a Leap year");
    }

4. // Maximum of Three Numbers
    let a = Number(prompt("Enter first number:"));
    let b = Number(prompt("Enter second number:"));
    let c = Number(prompt("Enter third number:"));
    if (a >= b) {
         if (a >= c) {
        console.log(a, "is the greatest");
    } else {
        console.log(c, "is the greatest");
    }
     } else {
         if (b >= c) {
        console.log(b, "is the greatest");
    } else {
        console.log(c, "is the greatest");
    }
   }

5. //simple Calculator
    let x = Number(prompt("Enter the first number:"));
    let operator = prompt("Enter operator (+, -, *, /):");
    let y = Number(prompt("Enter the second number:"));
    switch(operator){
        case "+":
            console.log(x + y);
            break;
        case "-":
            console.log(x - y);
            break;
        case "*":
            console.log(x * y);
            break;
        case "/":
            if(y !== 0){
                console.log(x / y);
            }else{
                console.log("Cannot dive by zero");
            }
            break;
        default:
            console.log("Invalid operator");
    }

6. //Multiplication Table
   let n = Number(prompt("Enter your number"));
    for(let i =1; i<=10;i++){
        console.log(`${n} x ${i} = ${n * i}`);
    }

7. //Cout Vowels and Consonants
   let word = prompt("Enter a word:").toLowerCase();  // Convert to lowercase
   let vowels = "aeiou";
   let vowelCount = 0;
   let consonantCount = 0;
   for (let char of word) {
      if (vowels.includes(char)) {
        vowelCount++;
    } else if (char >= 'a' && char <= 'z') {
        consonantCount++;
    }
 }
 console.log("Vowels:", vowelCount);
 console.log("Consonants:", consonantCount);

 8.//FizzBuzz
   let num = Number(prompt("Enter your number"));
   for(let i=1; i<=num;i++){
     if(i%3 === 0 && i%5 === 0 ){
        console.log("FizzBuzz")
     }
    else if(i%3 === 0){
        console.log("Fizz")
    } else if(i%5 === 0){
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
   }

9. // Days in a Month
     let month = Number(prompt("Enter month number (1-12):"));
     switch(month){
          case 1:
          case 3:
          case 5:
          case 7:
          case 8:
          case 10:
          case 12:
            console.log("31 days");
            break;
          case 4:
          case 6:
          case 9:
          case 11:
            console.log("30 days");
            break;
          case 2:
            console.log("28 or 29 days");
            break;
          default:
            console.log("Invalid Month")
     }

// Sum of Even Numbers
   let sum = 0;
   for(let i = 1; i<=100; i++){
     if(i % 2 == 0){
        sum += i;
     }
   }
    console.log("Sum of even numbers from 1 to 100 is:", sum);
