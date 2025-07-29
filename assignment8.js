1. //Print Numbers with While Loop 1 to 10
    let i = 1;
    while(i<=10){
        console.log(i);
        i++;
    }

2. //Sum of Numbers
    let n = prompt("Enter the number");
    n = Number(n);
    let sum = 0;
    let i = 1;
    while(i<=n){
        sum += i;
        i++;
    }
    console.log(sum);

3. //Print Multiplication Table (While Loop)
    let a = Number(prompt("Enter the number:"));
    let i = 1;
    while(i<=10){
        console.log(`${a} x ${i} = ${a*i}`);
         i++;
    }

4. // Reverse a String
    let str = "Abhinay";
    let reversed = str.split("").reverse().join("");
    console.log(reversed);

5. //Count Vowels in String
    let str = prompt("Enter a string:");
    let i = 0;
    let count = 0;

   while (i < str.length) {
    let ch = str[i].toLowerCase();
    if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
        count++;
    }
    i++;
  }

   console.log("Number of vowels:", count);

6.//Nested Loop: Star Pattern
    let i = 1;
    let n = 4;
    while(i <= n){
        let j = 1;
        let str = "";
        while(j<=i){
            str += "*";
            j++;
        }
        console.log(str);
        i++
    }

7. // 
    let a = 4;
    let i = 1;
   while (i <= a) {
    let str = "";
    let j = 1;
    while (j <= a) {
    if (i === 1 || i === a || j === 1 || j === a) {
      str = str + "*";
    } else {
      str = str + " ";
    }
    j++;
  }
  console.log(str);
   i++;
  }

8.//Count Digits in String
    let str = prompt("Enter a string:");
    let i = 0;
    let count = 0;

   while (i < str.length) {
    let ch = str[i];
    if (ch >= '0' && ch <= '9') {
        count++;
    }
    i++;
  }
   console.log(count);

9. //String Palindrome Check
   let str = prompt("Enter a string:");
   let reversed = "";
   let i = str.length - 1;

   while (i >= 0) {
    reversed += str[i];
    i--;
  }

if (str === reversed) {
    console.log("The string is a palindrome.");
} else {
    console.log("The string is not a palindrome.");
}

10. //Count Words in a String
    let str = prompt("Enter a sentence:");
    let count = 0;

   while (i < str.length) {
      if (str[i] === ' ') {
        count++;
    }
    i++;
  }
  if (str.length > 0) {
    count += 1;
  }
   console.log("Number of words:", count);



