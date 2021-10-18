export function simplePalindrome(phrase: string) {
  return phrase === phrase.split("").reverse().join("");
}

export function cyclePalindrome(word: string) {
  const splitedWord = word.split("");
  const reverseWord = [];

  for (let i = splitedWord.length - 1; i >= 0; i--) {
    reverseWord.push(splitedWord[i]);
  }

  return splitedWord.join("") === reverseWord.join("");
}
