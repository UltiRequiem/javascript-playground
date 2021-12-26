export function simplePalindrome(phrase: string) {
  return phrase === phrase.split("").reverse().join("");
}

export function cyclePalindrome(word: string) {
  const splittedWord = word.split("");
  const reversedWord = [];

  for (let i = splittedWord.length - 1; i >= 0; i--) {
    reversedWord.push(splittedWord[i]);
  }

  return splittedWord.join("") === reversedWord.join("");
}
