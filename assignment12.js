//////Objects & Object Methods /////

1. //Write code to create a student object with properties: name, age, and grade.
    let student = {
        name: "Abhinay",
        age: "25",
        grade: "PG"
    };
    console.log(student);

2. //Given the student object, print the value of the name property using dot notation
      let student = {
         name: "Abhinay",
         age: 25,
         course: "Computer Science"
   };
     console.log(student.name);

3. // Add a new property email to the student object and give it any value.
      let student = {
         name: "Abhinay",
         age: 25,
         course: "Computer Science"
   };
     student.email = "abhinaydasari025@gmail.com";
     console.log(student);

4. //Update the grade property of the student object to "A+"
     let student = {
         name: "Abhinay",
         age: 25,
         course: "Computer Science",
          grade: "c"
   };
     student.grade = A+;
     console.log(student);

5. //Remove the age property from the student object.
      let student = {
         name: "Abhinay",
         age: 25,
         course: "Computer Science",
         grade: "A+"
   };
      delete student.age;
     console.log(student);

6. //Add a method greet to the student object that prints "Hello, my name is [name]".
       let student = {
           name: "Abhinay",
           age: 25,
           course: "Computer Science",
           grade: "A+",
           greet: function() {
               console.log(`Hello, my name is ${this.name}`);
     }
  };
   student.greet();

7. //Modify the greet method to use this.name instead of directly using the property name
       let student = {
           name: "Abhinay",
           age: 25,
           course: "Computer Science",
           grade: "A+",
           greet: function() {
               console.log(`Hello, my name is ${this.name}`);
     }
  };
   student.greet();

8. // Write a for...in loop that prints all keys and values in the student object
    let student = {
    name: "Abhinay",
    age: 25,
    course: "Computer Science",
    grade: "A+",
    email: "abhinay@example.com"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

9. //Use the hasOwnProperty method to check if the object has a property named grade.
    let student = {
    name: "Abhinay",
    age: 25,
    course: "Computer Science",
    grade: "A+"
};

if (student.hasOwnProperty("grade")) {
    console.log("Property 'grade' exists in the student object.");
} else {
    console.log("Property 'grade' does NOT exist in the student object.");
}

10. //Create an array called students containing three different student objects. Print the name of each student using a loop
   let students = [
    { name: "Abhinay", age: 25, course: "Computer Science" },
    { name: "Bharat", age: 22, course: "Robotics" },
    { name: "Hemanth", age: 24, course: "ECE" }
];

// Using a for loop
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}