import { NUMBERS } from '../data.js'

/**
 * @param {any[]} arr
 * @param {any} toDel
 * @returns {any[]}
 */
export default function delItem(arr, toDel) {
  return arr
    .slice(0, arr.indexOf(toDel))
    .concat(arr.slice(arr.indexOf(toDel) + 1, arr.length))
}

console.log(delItem(NUMBERS, 50))
