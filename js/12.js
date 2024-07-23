const tecnology = ["Html", "Css", "Nodejs", "Reactjs", "Typescript", "Usiel"]

// for (let i = 0; i < tecnology.length; i++) {
//     console.log(tecnology[i]);

// }
//for each loop
tecnology.forEach((i) => {
    console.log(i)
});

//map make a new arra winth de condition in the function
const newTecnologiMap = tecnology.map((i) => {
    return i
})
console.log(newTecnologiMap);

//for of 

for (let tech of tecnology) {
    console.log("for of " + tech);
}