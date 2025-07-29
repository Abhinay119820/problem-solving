1.//Write a program to reverse a given string. Example: Input: "hello" Output: "olleh"
    let str = "hello";
    let reversed = str.split("").reverse().join("");
    console.log(reversed);

2. //Count the number of vowels (a, e, i, o, u) in a given string
    let str1 = prompt("Enter the string");
    let count = 0;
    let i = 0;
    while(i < str1.length){
        let ch = str1[i];
        if("aeiou".includes(ch)){
            count++;
        }
        i++;
    }
    console.log(count);

3. //Write a function to check if a string is a palindrome (reads the same backward as forward).
     let str2 = prompt("Enter a string");
         str2 = str2.toLowerCase();
     let n = str2.split('').reverse().join("");
     if(str2 === n){
        console.log(str2,"is a palindrome");
     } else{
        console.log(str2, "is a not palidrome" );
     }

4. //Given an array of numbers, find and print the largest value.
     let numbers = [16,18,35,24,81];
     let max = numbers[0];
     for(let i = 1; i < numbers.length; i++){
        if(numbers[i] > max){
            max = numbers[i];
        }
     }
     console.log(max);

5. //Write a program to calculate the sum of all numbers in an array.
    let arr = [6,8,10,12,14];
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum = sum + arr[i]
    }
    console.log(sum);
     
6. // Given an array, remove duplicate elements and print the new array
      let numbers = [1, 2, 2, 3, 4, 4, 5];
      let unique = [];
   for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
    unique.push(numbers[i]);
  }
}
console.log(unique);

7.// Write code to concatenate two arrays and show the combined result.
    let arr = [15,16,2,4];
    let arr1 = [3,6,8,9];

    let arr3 = arr.concat(arr1)
    console.log(arr3)

8.//Given an array and an element, print the index position of the element if it exists,otherwise print -1.
     let array = [10, 20, 30, 40, 50];
     let element = 30; 
     let index = array.indexOf(element);

     if (index !== -1) {
  console.log("Element found at index:", index);
  } else {
  console.log("-1");
  }

9. // Write a function to sort a given array of numbers in ascending order
     let arr = [45,63,6,45,3,2,121,1];
     arr.sort((a, b)=> a - b);
    console.log(arr);

10. //Write a program to replace all occurrences of a specified character with another character in a string.
    let original = "Hyderabad";
    let target = "H";
    let replace = "C";

    let newString = original.split(target).join(replace);
    console.log(original);
    console.log(newString);