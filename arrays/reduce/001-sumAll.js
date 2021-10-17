import { NUMBERS } from '../data.js'

/** @param {number[]} arr */
const sumAll = (arr) => arr.reduce((acum, cur) => acum + cur)

console.log(sumAll(NUMBERS))
