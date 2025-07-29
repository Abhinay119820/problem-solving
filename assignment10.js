1. //Write a function named greet that returns the string "Hello, Student!". Call the function and print its result
  function greet(){
     return "Hello, Student!";
  }
  let wishes = greet();
  console.log(wishes);

2. // Declare a function named add that takes two numbers as input parameters and returns their sum. Call this function with any two numbers and display the result.
   function add(x,y){
     return  x + y;
   }
    let sum = add(15,20);
    console.log(sum);

3. //Create a function named square that takes a number as a parameter and returns itssquare. Demonstrate its use by calling it with the value 5.
   function square(num){
    return num * num;
   }
   let result = square(5);
   console.log(result);

4. //Explain what happens when a function is called before it is declared in your programminglanguage of choice (e.g., JavaScript, Python, etc.).
    JavaScript hoists function declarations The function is available before its definition.

5.// Declare a function print_message that prints "This is a function statement." but does not return anything. Call this function.
    function print_message() {
  console.log("This is a function statement.");
  }
   print_message(); 

6. //Write a function multiplyThree that takes three numbers as arguments and returns their product. Provide an example call.
    function multiplyThree(a, b,c) {
        return a * b *c;
    }
    let product =  multiplyThree(2,9,18);
    console.log(product);

7. // Write a function welcome that takes a name as a parameter and returns "Welcome,<name>!". If no name is provided, return "Welcome, Guest!".
     function welcome(name) {
  if (name) {
    return "Welcome, " + name + "!";
  } else {
    return "Welcome, Guest!";
  }
}

  let verify1 = welcome("Abhinay");
  let verify2 = welcome(); 

   console.log(verify1); 
   console.log(verify2); 

8.//Create a function to_upper that accepts a string and returns it in uppercase
  function to_upper(str){
     return str.toUpperCase();
  }
   let result = to_upper("Abhinay Dasari");
   console.log(result)

9.// Create a function called is_even that takes a number and returns True if it is even,otherwise returns False.
     function is_even(number){
           return number % 2 == 0;
     }
       console.log(is_even(15));
        console.log(is_even(8));

10. // Write a function area_of_circle that takes the radius as a parameter and returns the area(use area = 3.14 * radius * radius). Add a comment describing what the function does.

       function area_of_circle(radius){  //declaring function and function name  and the radius as parameter.
         return  3.14 * radius * radius; // here  i am return the area of circle
       }
       let total = area_of_circle(160); // assign total as new variable and passed the argument
       console.log(total);