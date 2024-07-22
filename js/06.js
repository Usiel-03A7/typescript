// destructuring >=2 objects
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

const { name } = student;
const { name: nameCar } = car;
console.log(name);
console.log(nameCar);

//make a destructuring into a obj of obj

const { direction: { street } } = car
console.log(street);