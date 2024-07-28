const tecnology = ["js", "java", "python", "typescript", "RoR"]
const numbers = [101, 24, 50, 27, 23, 35, 25, 20,]

//function array filter
// const newarray = tecnology.filter(tech => tech != "RoR")
// console.log(newarray);

//includes

// const newarray = tecnology.includes("RoR")

// console.log(newarray);

//Some return if one the condition is rigth

// const resultado = numbers.some(number => number > 1000)


// return de first element that complies the condition 
// const resultado = numbers.find(number => number > 1000)

// return true or false if every complies the condition
// const resultado = numbers.every(number => number > 1000)


//reduce return an acummuladed total

const newsale = numbers.reduce((total, number) => total + number, 0)

console.log(newsale);