//join a objects 
const student = {
    name: "Juan",
    age: 24,
    zise: 1.5,
    sex: "Female",
    education: "ing sistemas",
    phone: "3121322222"
}
const car = {
    name: "BMW",
    id: 31245213,
    premium: true,
    direction: {
        street: "cannaveralez"
    }
}

// const vehicle = {
//     companny: "bmw",
//     ...car //spread operator 
// }

const studenCar = {
    ...student,
    ...car
}
console.log(studenCar)

const newObj1 = Object.assign(student, car)

console.log(newObj1);