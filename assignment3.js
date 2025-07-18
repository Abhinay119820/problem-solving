let a  = 5;
let b  = 3;
let sum = a + b; // here i am storing a and b in a sum variable.
console.log(sum);


2. let x = 10;
   x += 7; // x= x+7 --> x = 10+7
   console.log(x);

3. let p = 4;
   let q = 2;
   let r = (p*q) // here i am taken a r as third variable and i a storing p and q values in the r and then i am doing multiply.
   console.log(r)

4. let n = 20;
   n -= 5;     // n = n - 5 here n is 20  then 20-5 = 15.
   console.log(n); // output is 15.

5. The difference between ++i (prefix) and i++ (postfix) lies in when the value is incremented during the expression's evaluation.
   
   Prefix (++i) increments i first , then returns the updated value.
   let a = 10;
   let b = ++a;  // a+1=a 10+1 = 11
   console.log(a); // 11
   console.log(b); // 11
   Postfix (i++) Returns the current value of i first , then icrements it afterward.
   let x = 10;
   let y = x++; // y is the current value of x which is 10 then x is incremenented.
   console.log(x); // 11
   console.log(y); // 10

   6. let x = 5;
      let y = x++;
      console.log(x, y);

      the output for above code is 6 and 5 reason y is current value of x then the x value is incremented to 1 so the output of x is 6 and y is 5.

   7. let x = 5;
      let y = ++x;
      console.log(x, y);
      The output for above code is 6 and 6 in prefix the variable y is increment the x value and return the same updated value so here the output of x is 6 and also y is 6.

   8. let a = 17;
      let b = 4;
      let c  = (a % b);//when 17 is divided with 4 the remainder will become 1.so the modulus wil take the remainder value so the output is 1.
      console.log(c); // output is 1.

   9. let m = 8;
      m /= 2;  // here / indicates the division so m /= 2 means m = m/2 therefore m = 8/2 it is 4.
      console.log(m) // output is 4.
 
   10.let count = 10;

    console.log(--count); // Prefix: count is decremented *before* printing → Output: 9
    console.log(count);   // Output: 9 (still 9 after the previous operation)

   console.log(count--); // Postfix: prints current value *before* decrementing → Output: 9
   console.log(count);   // Output: 8 (after the postfix decrement)
    
   --count (prefix) → decrements count immediately, so the value used in console.log is one less.

    count-- (postfix) → uses the current value as is, then performs the decrement afterwards.
   
