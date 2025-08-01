   //Functions
1. //Write a function that returns the sum of two numbers
    function add(a,b){
        return a + b;
    }
    let sum = add(21, 56);
    console.log(sum);

2. //Create a function that takes a name as input and returns a greeting message (example:“Hello, Ram!”).
    function greet(name) {
    return "Hello, " + name + "!";
   }
   console.log(greet("Ram"));
   
3. // Write a function that checks if a number is even or odd. Return true for even, false for odd.
      function isEven(number){
        return number % 2 === 0;
      }
      num1 = isEven(8);
      num2 = isEven(19);
      console.log(num1);
      console.log(num2);

4. //Create a function that takes an array and returns the first element
      function firstElement(arr) {
         return arr[0]
      }
      arr1 = firstElement(["Fortuner","BMW","Audi"]);
      console.log(arr1);

5. //Write a function that finds and returns the smallest number from an array of numbers
     function SmallestNumber(arr){
          let smallest = arr[0];
          for(let i =1 ; i<arr.length;i++){
            if (arr[i] < smallest) {
                smallest = arr[i];
            }
          }
          return smallest
     }
       arr1 = SmallestNumber([10,20,1,24,36,55]);
       console.log(arr1);

///// Nested Functions ////////

6. //Write a function that contains another function inside it. The inner function should return the square of a number.
   function outerFunction(number){
      function square(n) {
        return n * n ;
      }
      return square(number);
   }
   num1 = outerFunction(17);
   console.log(num1);

7. //Create a function which takes a number, and uses a nested function to check if the number is positive, negative, or zero.
     function findNumbers(num){
         function getNumbers(num1){
            if(num1 > 0){
                return "Positive";
            }else if (num1 < 0){
                return "Negative";
            }else{
                return "Zero"
            }
         }
         return getNumbers(num);
     }
     num2 = findNumbers(17);
     console.log(num2);

8. // Write a function with a nested function to reverse a string
     function reverseString(str) {
        function getreverseString(str1){
            return str1.split("").reverse().join("");
        }
         return getreverseString(str);
     }
     str2 = reverseString("Abhinay");
     console.log(str2)

9. // Define a function that takes two numbers, adds them using an inner function, and returns the result.
      function addNumbers(x,y){
        function sum(a,b){
            return a + b;
        }
        return sum(x,y);
      }
      num1 = addNumbers(5,19);
      console.log(num1);

10.// Write a function that returns another function which multiplies its input by 10.
    function multiplyNumber(){
        return function(number){
            return number * 10;
        }
    }
     let number1 = multiplyNumber();
     console.log(number1(10));

////// Arrays ///////

11. // Write a function that sums all the elements of an array.
      function numbers(arr){
         let sum = 0;
         for (let i = 0;i<arr.length;i++){
            sum += arr[i];
         }
         return sum;
      }
      num1 = numbers([5,6,96,57,1001]);
      console.log(num1)

12. // Create an array of 5 student names and print the names using a loop.
      let studentname = ["Abhinay","Gorige","Bharat","Ajay"];

      for(let i=0; i<studentname.length;i++){
        console.log(studentname[i]);
      }

13. // Write a function that checks if a particular element exists in an array.
       function elementExists(arr, element){
        return arr.includes(element);
       }
       element1 = elementExists([45,90,67,56], 90);
       element2 = elementExists([45,90,67,56], 20);
       console.log(element1);
       console.log(element2);

14. //Create a function that removes the last element from an array and returns the new array.
      function removeLast(arr){
        arr.pop();
        return arr;
      }
      list1 = removeLast([14,16,79,50]);
      list2 = removeLast(["Red","Blue","Green"]);
      console.log(list1);
      console.log(list2);

15. //Write a function that returns the length of an input array.
     function arrayLength(arr){
        return arr.length;
     }
     arr1 = arrayLength([100,140,3,5]);
     arr2 = arrayLength([]);
     console.log(arr1);
     console.log(arr2);

/////// Strings ///////

16. //Write a function that takes a string and returns the number of vowels in it
     function CountVowels(str){
        let vowels = "aeiouAEIOU";
        let count = 0;
        for(let i = 0; i<str.length; i++){
            if(vowels.includes(str[i])){
                count++;
            }
        }
        return count;
     }
     count1 = CountVowels("abhinay");
     count2 = CountVowels("DASARI");
     console.log(count1);
     console.log(count2);

17. // Create a function that converts a string to uppercase
     function String(str){
        return str.toUpperCase();
     }
     str1 = String("abhinay");
     str2 = String("banana");
     console.log(str1);
     console.log(str2);

18. // Write a function that checks if a string is a palindrome (reads the same forwards and backwards).
     function isPalindrome(str){
          for (let i = 0; i < str.length / 2; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
  console.log(isPalindrome("madam")); 
  console.log(isPalindrome("abhi"));   
  console.log(isPalindrome("racecar")); 

19. // Define a function that joins two strings with a space and returns the new string.
      function joinStrings(str1 , str2){
        return str1 + " " + str2;
      }
      console.log(joinStrings("Abhinay","Dasari"));

20. //Write a function that counts the number of words in a given sentence.
      function countwords(str){
        let count = 0;
        for(let i = 0;i<str.length;i++){
            count++;
        }
        return count;
      }
      count1 = countwords("Apple");
      console.log(count1);

/////// Object ///////

21. //Create an object to represent a car with properties: make, model, year, and color. Print the object.
     let car = {
        make: "Mahindra",
        model: "Scorpio",
        year: "2000",
        color: "Black"
     };
     console.log(car);

22. //Define an object called "book" with properties: title, author, and numberOfPages. Print each property separately.
     let book = {
        title: "ELECTROMAGNETIC WAVES AND TRANSMISSION LINES",
        Author: "John A. Buck ",
        numberOfPages: "445"
     };
     console.log("Title: " + book.title);
     console.log("Author: " + book.author);
     console.log("Number of Pages: " + book.numberOfPages);

23. // Create an object to represent a movie with properties: name, director, and releaseYear.Change the releaseYear and print the updated object.
      let movie = {
        name: "Dragon",
        director: "Prashanth Neel",
        releaseYear: 2026
      };
      console.log("Before update:", movie);
      movie.releaseYear = 2028;
      console.log("After update:",movie);

24. // Write an object called "phone" with properties: brand, model, and price. Add a new property called "color" to the object and print the object
    let phone = {
        brand: "IPhone",
        model: "17 pro",
        price: "2,00,000"
    };
    console.log("Before adding color:",phone);
    phone.color = "Blue";
    console.log("After adding color:", phone);

25. //Create an object named "city" with properties: name, population, and country. Print asentence using these properties (e.g., "Hyderabad is a city in India with a population of 10 million.")
    let city = {
        name: "Hyderabad",
        population: "10 million",
        country: "India"
    };

   console.log(`${city.name} is a city in ${city.country} with a population of ${city.population}.`);


     