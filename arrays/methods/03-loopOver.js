import { FRUITS } from "../data.js";

/** @param {Array} arr */
const printItems = (arr) => {
  arr.forEach((elem, index) => console.log(elem, index));
};

printItems(FRUITS);
