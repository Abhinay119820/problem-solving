1. A variable is a container to store the data. In JavaScript Variables are defined as Var , let and Constant 


2. Var can be declared as 

 Var a =  10;
 console.log(a)

 3. Both let and const keywords are blocked scope coming to let By using let keyword 
 we will do declaration assign values and redeclration also possible whereas const
 in the name itself it will constant once we declare we are not allow to redeclare and reassign.


4. No we cant re assign because const keywords holds the values constant once we declared and assigned it is the
fixed constant values.

5.It will through ReferenceErrorif you use a variable declared with let before its declartion let declartions are 
hoisted.


6. it doesnt through any error but the output is undefined.

7.{
    let a = 10;
    console.log(a) //it will work here because within the block
}
   console.log(a) //it is not work outside the block .

8. yes it is possible to declare multiple values in single line . 
  
   var a=1,b=2,c=3

9. in java script when a variable is declared but not initialized then its value is undefined.

10.local variables accessible within the function or block when declared.
   Global variables are accessible throughout the script.
