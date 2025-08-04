////// Variables //////
1. //Declare a variable named age and assign the value 20 to it.
      let age = 20;
      console.log(age);

2. //Change the value of a variable name from "Alice" to "Bob".
      let name = "Alice";
         name = "Bob";
         console.log(name);

3. //Declare two variables, a (5) and b (10), and swap their values
     let a = 5;
     let b = 10;
     
    let c = a;
        a = b;
        b = c;
    console.log(a);
    console.log(b);

//////// Arrays /////////

4. // Create an array called colors containing "red", "green", and "blue".
     let arr = ["red","green","blue"];
     console.log(arr);

5. // Write code to print the last element of an array scores.
     let scores = [68,79,34,23,45,67];
         console.log(scores[scores.length-1]);

6. // Add the number 100 to the end of the array marks
     let marks = [35,75,85,45,95];
        marks.push(100);
        console.log(marks);

7. // Remove the first element from an array cities.
      let cities = ["Hyderabad","Bengaluru","Chennai","Mumbai","Delhi"];
          cities.shift();
          console.log(cities);

8. //Find the sum of all elements in the array numbers = and print the result.
     let numbers = [18,25,35,76,98];
     let sum = 0;
     for(let i = 0;i<numbers.length;i++){
        sum += numbers[i]
     }
     console.log(sum);

/////// Objects ///////

9. //Create an object car with properties brand: "Toyota", model: "Corolla", and year: 2022.
     let car = {
        brand: "Toyota",
        model: "Corolla",
        year: "2022"
     };
     console.log(car);

10. // Update the model property of the object car to "Camry".
       let car = {
        brand: "Toyota",
        model: "Corolla",
        year: "2022"
     };
     car.model = "Camry";
     console.log(car);

11. //Print all property names (keys) of an object called student.
      let students = {
           name: "Abhinay Dasari",
           age: "23",
           mobile: "936465352",
           batch: "84",
           course: "Python Full Stack Developer With AI"     
           };
           console.log(students);

           console.log("Keys printed one by one:");
          for (let key in students) {
          console.log(key);
        }

12. //Given person = { name: "Rahul", age: 21 }, add a property hobby with value "cricket".
       let person ={ name: "Rahul", age: 21 };
       person.hobby = "cricket";
       console.log(person);

///////// Strings ////////

13. //Given a string word = "javascript", print the first character
     let word = "javascript";
     console.log(word[0]);

14. // Reverse the string greet = "hello"
       let greet = "hello";
       let reversed = greet.split("").reverse().join("");
       console.log(reversed);

15. //Given text = "apple,banana,orange", split it into an array of fruits.
      let text = "apple,banana,orange";
      let fruits = text.split(",");
      console.log(fruits);

16. //Replace the word "cat" with "dog" in the string sentence = "The cat sat on the mat".
      let sentence = "The cat sat on the mat";
      let newSentence = sentence.replace("cat","dog");
      console.log(newSentence);

///////// Functions ////////

17. //Write a function square that returns the square of a given number
      function square(n){
         return n * n ;
      }
       num = square(15);
       console.log(num);

18. // Write a function isEven that checks if a given number is even.
       function isEven(a){
        return a % 2 == 0 ;
       }
       num1 = isEven(19);
       num2 = isEven(8);
       console.log(num1);
       console.log(num2);

19. // Write a function getFirstElement that returns the first element of an array passed as a parameter
       function getFirstElement(arr){
          return arr[0]
       }
       const numbers = [8,15,2002];
       console.log(getFirstElement(numbers));

20. // Write a function getFullName that takes two parameters, firstName and lastName, and returns the full name as a string
         
        function getFullName(firstName, lastName) {
        return firstName + " " + lastName;
       }
        console.log(getFullName("Abhinay", "Dasari"));