/* 1) MAX CHAR

Given a string, return the character that is most
commonly used in the string.

--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
const getMaxChar = (string) => {
  var max = 0
  const stringArray = string.split("")
  maxChar = ""
  stringArray.forEach(function (char) {
    if (string.split(char).length > max) {
      max = string.split(char).length
      maxChar = char
    }
  })
  return maxChar
}

console.log("Ex1: ", getMaxChar("asdsassssaaxcxx"))

/* 2) ANAGRAMS

Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case

--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/

function checkAnagrams(string1, string2) {
  const arrayChars1 = string1.split("")
  const arrayOnlyLetters1 = []
  for (const char of arrayChars1) {
    if (/[a-zA-Z]/.test(char)) arrayOnlyLetters1.push(char.toUpperCase())
  }
  const sortedString1 = arrayOnlyLetters1.sort().join("")

  const arrayChars2 = string2.split("")
  const arrayOnlyLetters2 = []
  for (const char of arrayChars2) {
    if (/[a-zA-Z]/.test(char)) arrayOnlyLetters2.push(char.toUpperCase())
  }
  const sortedString2 = arrayOnlyLetters2.sort().join("")

  return `It's ${
    sortedString1 === sortedString2
  } that ${string1} and ${string2} are anagrams.`
}

console.log("Ex2: ", checkAnagrams("Radensuaso!", "Andre Sousa"))

/* 3) ANAGRAMS 2

Given a word and a list of possible anagrams, select the correct sublist.

--- Examples 

    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

function checkAnagramsList(string1, list) {
  const arrayChars1 = string1.split("")
  const arrayOnlyLetters1 = []
  for (const char of arrayChars1) {
    if (/[a-zA-Z]/.test(char)) arrayOnlyLetters1.push(char.toUpperCase())
  }
  const sortedString1 = arrayOnlyLetters1.sort().join("")

  const arrayOfMatchingAnagrams = []
  for (const string2 of list) {
    const arrayChars2 = string2.split("")
    const arrayOnlyLetters2 = []
    for (const char of arrayChars2) {
      if (/[a-zA-Z]/.test(char)) arrayOnlyLetters2.push(char.toUpperCase())
    }
    const sortedString2 = arrayOnlyLetters2.sort().join("")
    if (sortedString1 === sortedString2) {
      arrayOfMatchingAnagrams.push(string2)
    }
  }

  return arrayOfMatchingAnagrams
}

console.log(
  "Ex3: ",
  checkAnagramsList("Andre Sousa", [
    "Radensuaso!",
    "Gary",
    "?Nauseas Rod",
    "Bern",
    "what?",
    "Auras Nodes",
  ])
)

/* 4) PALINDROME

Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.

--- Examples:

    palindrome("abba") === true
    palindrome("abcdefg") === false*/

const isItPalindrome = (string) => {
  const reversedString = string.split("").reverse().join("")
  return `It's ${
    string.toUpperCase() === reversedString.toUpperCase()
  } that ${string} is a Palindrome.`
}

console.log("Ex4: ", isItPalindrome("!Level!"))

/* 5) REVERSE INT

Given an integer, return an integer that is the reverse
ordering of numbers.

--- Examples

    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */

const reverseInt = (integer) => {
  const positiveInteger = Math.abs(integer)
  const reversedPositiveIntegerString = positiveInteger
    .toString()
    .split("")
    .reverse()
    .join("")
  const reversedPositiveInteger = parseInt(reversedPositiveIntegerString)
  if (integer < 0) {
    return -Math.abs(reversedPositiveInteger)
  } else if (integer > 0) {
    return reversedPositiveInteger
  } else if (integer === 0) {
    return 0
  }
}

console.log("Ex5: ", reverseInt(-521))

/* 6) STEPS

Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!

--- Examples

    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */

const stepIt = (number) => {
  console.log("Ex6: ")
  for (let i = 1; i <= number; i++) {
    console.log("'" + "#".repeat(i) + " ".repeat(number - i) + "'")
  }
}

stepIt(5)

/* 7) REVERSE STRING

Given a string, return a new string with the reversed
order of characters

--- Examples

    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */

function reverseString(string) {
  return string.split("").reverse().join("")
}

console.log("Ex7: ", reverseString("wheel of time"))

/* 8) CHUNK

Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size

--- Examples

    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
function chunkIt(array, number) {
  const chunks = []
  for (let i = 0; i < array.length; i += number) {
    const chunk = []
    for (let j = 0; j < number; j++) {
      if (array[i + j] === undefined) {
        break
      }
      chunk.push(array[i + j])
    }
    chunks.push(chunk)
  }
  return chunks
}

console.log("Ex8: ", chunkIt([1, 2, 3, 4, 5, 6, 7, 8], 3))

/* 9) PYRAMID

Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides

--- Examples

    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

const pyramidIt = (number) => {
  console.log("Ex6: ")
  for (let i = 1; i <= number; i++) {
    console.log(
      "'" +
        " ".repeat(number - i) +
        "#".repeat(i - 1) +
        "#" +
        "#".repeat(i - 1) +
        " ".repeat(number - i) +
        "'"
    )
  }
}

pyramidIt(7)

/* 10) SPYRAL MATRIX

Write a function that accepts an integer N
and returns a NxN spiral matrix.

--- Examples

    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]

*/
