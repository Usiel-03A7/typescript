// const tecnology = ["Html", "Css", "Nodejs", "Reactjs", "Typescript", "Usiel"]
// //tecnology.push("Next.js")

// const newTecnology = [...tecnology, "Next.js"]



// console.log(tecnology);

const tecnology = ["Html", "Css", "Nodejs", "Reactjs", "Typescript", "Usiel"]
const tecnology2 = tecnology.map((tech) => {
    if (tech === "Typescript") {
        return "Dump"
    }
    else {
        return tech
    }
})
console.log(tecnology2);
