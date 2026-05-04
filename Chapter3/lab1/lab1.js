console.log("SS")

//fullName: tên đầy đủ (string)
const fullName = "Cao Phat";

//birthYear: năm sinh (number)
const birthYear = 2003
const today = new Date();
const currentYear = today.getFullYear();
const Age = currentYear - birthYear;

//isStudent: true/false
isStudent = false

//cách 1
console.log(`
    Tên: ${fullName}
    Age: ${Age}
    Student: ${isStudent}
`)

//cách 2
console.log("Fullname: ", fullName)
console.log("Age: ", Age)
console.log("Student: ", isStudent)