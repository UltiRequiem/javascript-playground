/**
 * @param {string} phrase
 * @returns {boolean}
 */
export function simplePalindrome(phrase) {
  return phrase === phrase.split("").reverse().join("");
}

/**
 * @param {string} phrase
 * @returns {boolean}
 */
export function cyclePalindrome(word) {
  const splitedWord = word.split("");
  const reverseWord = [];

  for (let i = splitedWord.length - 1; i >= 0; i--) {
    reverseWord.push(splitedWord[i]);
  }

  return splitedWord.join("") === reverseWord.join("");
}
