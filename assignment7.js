 1. //Write a program to print numbers from 1 to 10 using a for loop.
    let s = 10;
    for(let i = 1;i<=s;i++){
        console.log(i)
    }

 2.//Write a program to print all even numbers between 1 and 20 using a for loop.
    let n = 20;
    for(let i = 1;i<=n;i++){
        if(i % 2 == 0){
             console.log(i)
        }
    }

 3.//Write a program to print the first 10 natural numbers in reverse order using a for loop.
      for(let i = 10; i>=1;i--){
         console.log(i)
      }

 4. //Write a program to print the sum of numbers from 1 to 10 using a for loop.
      let sum = 0;
      for(let i =1; i<=10;i++){
      sum += i; // Add i to sum in each iteration
       }
     console.log("Sum:", sum);

 5.//Write a program to print a pattern like this using nested for loops:
     let m = 5;
     for(let i =1 ; i<=m ;i++){
       let  p = "";
       for(let j =1 ; j<=i; j++) {
            p += "*"
       }
       console.log(p)

     }
    
 6. //Write a program to print a square pattern of stars (5 rows and 5 columns) using nested for loops:
     let x = 5;
     let y = 5;
     for(let i =1 ; i<=x ;i++){
       let  p = "";
       for(let j =1 ; j<=y; j++) {
            p += "*"
       }
       console.log(p)

     }

 7. //Write a program to print the multiplication table of 7 (from 7x1 to 7x10) using a for loop.
      let t = 7;
      for(i=1 ; i<=10 ; i++){
        console.log(`${t}x${i} = ${t*i}`)
      }
 
 8. //Write a program to print a pattern like this using nested for loops:
      let m = 5;
      for (let i = 1 ; i<=m; i++){
        let pattern = "";// empty string to store the  numbers
         for(let j=1;j<=i;j++){
            pattern += j;
         }
         console.log(pattern)
      }


 9. //Write a program to print all odd numbers between 1 and 50 using a for loop.
        let sum = 50;
       for(let i = 1 ; i<=sum; i++){
           if(i % 2 !== 0){
               console.log(i)
           }
       }

 10.// Write a program to print a triangle pattern using nested for loops made of numbers:
         let n = 5;
        for (let i = 1; i <= n; i++) {
        let pattern = "";
       for (let j = 1; j <= i; j++) {
       pattern += i; // repeating the row numbers.
      }
        console.log(pattern);
    }


 
