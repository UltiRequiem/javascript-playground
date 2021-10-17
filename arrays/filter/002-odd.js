import { NUMBERS } from '../data.js'

/** @param {number[]} arr */
const rmOdds = (arr) => arr.filter((num) => num % 2 === 0)

console.log(rmOdds(NUMBERS))
