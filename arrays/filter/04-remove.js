import { NUMBERS } from '../data.js'

const delItem = (arr, toDel) => arr.filter(() => !arr.includes(toDel))

const no50 = delItem(NUMBERS, 50)

console.log(no50)
