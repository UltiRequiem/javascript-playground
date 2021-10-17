const palindromeOne = (phrase) => phrase === phrase.split('').reverse().join('')

function palindromeTwo(word) {
  const splitedWord = word.split('')
  const reverseWord = []

  for (let i = splitedWord.length - 1; i >= 0; i--) {
    reverseWord.push(splitedWord[i])
  }

  return splitedWord.join('') === reverseWord.join('')
}

export { palindromeOne, palindromeTwo }
