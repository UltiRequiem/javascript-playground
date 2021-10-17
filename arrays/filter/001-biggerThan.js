import { NUMBERS } from '../data.js'

/**
 * @param {number[]} arr
 * @param {number} max
 */

const biggerThan = (arr, max) => arr.filter((num) => num > max)

console.log(biggerThan(NUMBERS, 70))
