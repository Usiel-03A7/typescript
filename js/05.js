/**
 * manipulation object
 * crud
 */
//create
const student = {
    name: "Juan",
    age: 24,
    zise: 1.5,
    sex: "Female",
    education: "ing sistemas",
    phone: "3121322222"
}


//modify property of object
student.phone = "412"


// add property
student.glasses = true;

//delete a property
delete student.glasses;


console.log(student);

//this method make a object unmutable
Object.freeze(student)

console.log(student);

//this method u can modify only properties of object but not delete.
Object.seal(student)