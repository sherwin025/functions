// const calculateAgeInDogYears = (age) => {
//     const ageInDogYears = age / 7
    

//     return ageInDogYears
// }

// const dogAge = calculateAgeInDogYears(22)

// console.log(dogAge) 

// const dogStatement = (dogBreed) => {
//     if (dogBreed === "meow"){
//         return `I like cats`
//     } else {
//     return `My favorite dog breed is ${dogBreed}`
// }
// }

// const myFavorite = dogStatement("meow")

// console.log(`When it comes to pets, ${myFavorite}`)

// const add = (one,two, three) => {
//     return one + two + three
// }

// const sum = add(11,4,17)

// console.log(sum)

// const go = (direction, speed) => {
//     if (speed > 75){
//     return `The car is moving ${direction} at ${speed} mph. SLOW DOWN.`
// } else {
//     return `The car is moving ${direction} at ${speed} mph.`
// }
// }

// const car = go("forward",82) 

// console.log(car)

// const evenOrOdd = (number) => {
//     if (number === 0){
//         return `bro`
//     } else if (number % 2 === 0) {
//         return "Even"
//     }else {
//         return "Odd"
//     }
// }

// const result = evenOrOdd(23)

// console.log(result)


// const numbers = [1, 23, 145, 135, 124, 5, 0]

// for ( const number of numbers) {
//     console.log(evenOrOdd(number))

// }

// const words = [
//     "The", "killing", "complex", "houses",
//     "married", "kittens", "and", "single",
//     "soldiers", "and", "their", "kleptomaniacal",
//     "families"
// ]



// const filterKWords = (words) => {
//     const wordsNoK = []

//     for (const word of words) {
//         if (word[0] !== "k"){
//             wordsNoK.push(word)
//         }
//     }
//     return wordsNoK
// }
 
// const filteredWords = filterKWords(words)

// console.log(filteredWords)

// const combineWords = (noKword) => {
//     let sentence = ""
//     for (const word of noKword) {
//         sentence += word + " "
//     }
//     return sentence
// }

// const sentence1 = combineWords(filteredWords)

// console.log(sentence1)

// const caughtTuna = (chance) => {
//     let random = Math.random() * chance

//     if (random > 2) {
//         console.log(`Sven hooked a tuna!  :)`)
//     } else {
//         console.log(`Sven came up empty-handed.  :(`)
// }
// }

// caughtTuna(30)

// const orderMeal = (sandwich1, side1, drink1, dessert1) => {
//     return {
//         "sandwich": sandwich1,
//         "side": side1,
//         "drink": drink1,
//         "dessert": dessert1 
//     }
// }

// const takeOutBag = orderMeal("Ultimate Slammer", "Fudge sundae", "Mr. Pepper", "Potato wedges")

// console.log(takeOutBag)

const person = {
    firstName: "jimmy",
    lastName: "varg"
}

const wakeUp = (person) => {
    return `${person.firstName} ${person.lastName} woke up`
}
const brushTeeth = person => {
    return `${person.firstName} ${person.lastName} brushed their teeth`
}
const getDressed = person => {
    return `${person.firstName} ${person.lastName} got dressed`
}
const makeFood = person => {
    return `${person.firstName} ${person.lastName} made some food`
}
const leave = person => {
    return `${person.firstName} ${person.lastName} left the house`
}

// const dayPlanner = (who, chore, day ) => {
//     const sentence = chore(who)
//     return `${sentence} on ${day}`
// }

// console.log(dayPlanner(person, wakeUp, "tuesday"))

const dayPlanner = (chore1, chore2, chore3, who, day ) => {
    let sentence1 = chore1(who)
    const sentence2 = chore2(who)
    let sentence3 = chore3(who)
    return `On ${day}, ${sentence1}, and ${sentence2}, and ${sentence3}.`
}

console.log(dayPlanner(brushTeeth, getDressed, wakeUp, person, "tuesday"))
