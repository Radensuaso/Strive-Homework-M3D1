/*

1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/

const calculateSum = (x, y) => {
  if (x === y) {
    return (x + y) * 3
  } else {
    return x + y
  }
}

console.log("Ex1: ", calculateSum(3, 3))

/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkFifty = (x, y) => {
  return x === 50 || y === 50 || x + y === 50
}

console.log("Ex2: ", checkFifty(26, 24))
/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar = (string, n) => {
  const stringArray = string.split("")
  for (let i = 0; i <= stringArray.length; i++) {
    if (i === n) {
      stringArray.splice(i - 1, 1)
      break
    }
  }
  return stringArray.join("")
}

console.log("Ex3: ", removeChar("andré", 5))
/*

4)
 Create a function to find the largest of three given integers.
*/

const findTheLargest = (x, y, z) => {
  if (x > y) {
    if (x > z) {
      return x + " is the largest integer of the three."
    } else {
      return z + " is the largest integer of the three."
    }
  } else if (y > z) {
    return y + " is the largest integer of the three."
  } else {
    return z + " is the largest integer of the three."
  }
}

console.log("E4: ", findTheLargest(10, 6, 5))

/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const checkRange = (x, y) => {
  return (
    ((x >= 40 && x <= 60) || (x >= 70 && x <= 100)) &&
    ((y >= 40 && y <= 60) || (y >= 70 && y <= 100))
  )
}

console.log("Ex5: ", checkRange(31, 100))
/*
6) 

Create a function to create a new string of specified copies (positive number) of a given string.
*/

const createCopies = (string, n) => {
  const arrayOfStrings = []
  for (let i = 0; i < n; i++) {
    arrayOfStrings.push(string)
  }
  return arrayOfStrings.join("")
}

console.log("Ex6: ", createCopies("strive", 5))

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const displayLosNew = (city) => {
  const firstThreeChars = city.substring(0, 3)
  if (firstThreeChars === "Los" || firstThreeChars === "New") {
    return city
  } else {
    return "blank"
  }
}

console.log("Ex7: ", displayLosNew("New Orleans"))

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/

const calculateSumOfArray = (array) => {
  if (array.length > 3) {
    return "The array is too long, give us only three integers"
  } else {
    return (
      "The sum of the three integers is " + (array[0] + array[1] + array[2])
    )
  }
}

console.log("Ex8: ", calculateSumOfArray([2, 4, 5]))
/*

9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/

const doesItContainOneOrThree = (array) => {
  if (array.length > 2) {
    return "The array is too long, give us only two integers"
  } else {
    return (
      "It's " +
      (array[0] === 1 || array[0] === 3 || array[1] === 1 || array[1] === 3) +
      " that the array contains 1 or 3"
    )
  }
}

console.log("Ex9: ", doesItContainOneOrThree([2, 5]))

/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
const doesItNotContainOneOrThree = (array) => {
  if (array.length > 2) {
    return "The array is too long, give us only two integers"
  } else {
    return (
      "It's " +
      (array[0] !== 1 && array[0] !== 3 && array[1] !== 1 && array[1] !== 3) +
      " that the array does not contains 1 or 3"
    )
  }
}

console.log("Ex10: ", doesItNotContainOneOrThree([2, 1]))

/*
11)

Create a function to find the longest string from a given array of strings.
*/
const findLongestString = (stringsArray) => {
  let longestLength = stringsArray[0].length
  let longestString = stringsArray[0]
  for (let i = 1; i < stringsArray.length; i++) {
    if (stringsArray[i].length > longestLength) {
      longestLength = stringsArray[i].length
      longestString = stringsArray[i]
    }
  }
  return "The longest string in the array is " + longestString
}

console.log(
  "Ex11: ",
  findLongestString([
    "Hey",
    "who's",
    "is",
    "bigger",
    "one",
    "here",
    "I'll",
    "fight",
    "him",
    "to",
    "the",
    "death",
  ])
)
/*

12)

Create a function to find the types of a given angle.

Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    obtuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.

*/

function whatKindOfAngle(angle) {
  if (angle > 0 && angle < 90) {
    return "The angle given is an acute angle."
  } else if (angle === 90) {
    return "The angle given is a right angle."
  } else if (angle > 90 && angle < 180) {
    return "The angle given is an obtuse angle."
  } else if (angle === 180) {
    return "The angle given is a straight angle."
  } else {
    return "Not a valid angle"
  }
}

console.log("Ex12: ", whatKindOfAngle(90))

/*
13)

Create a function to find the index of the greatest element of a given array of integers
*/

const findIndexOfTheGreatestInteger = (integers) => {
  let greatestInteger = integers[0]
  let greatestIntegerIndex
  for (let i = 1; i < integers.length; i++) {
    if (integers[i] > greatestInteger) {
      greatestInteger = integers[i]
      greatestIntegerIndex = i
    }
  }
  return "The index of the greatest integer is " + greatestIntegerIndex
}

console.log("Ex13: ", findIndexOfTheGreatestInteger([50, 2, 515, 4, 77]))

/*
14)
Create a function to get the largest even number from an array of integers.
*/
const findTheGreatestEvenInteger = (integers) => {
  const evenIntegers = []
  for (const integer of integers) {
    if (integer % 2 === 0) {
      evenIntegers.push(integer)
    }
  }

  let greatestEvenInteger = evenIntegers[0]
  for (let i = 1; i < evenIntegers.length; i++) {
    if (evenIntegers[i] > greatestEvenInteger) {
      greatestEvenInteger = evenIntegers[i]
    }
  }
  return "The greatest even integer is " + greatestEvenInteger
}

console.log("Ex14: ", findTheGreatestEvenInteger([2, 5555, 20, 42, 3]))

/*
15)

Create a function to check from two given integers, whether one is positive and another one is negative.
*/
function isItPositiveAndNegative(x, y) {
  return `It's ${
    (x < 0 && y > 0) || (y < 0 && x > 0)
  } that one integer is positive and another one negative`
}

console.log("Ex15: ", isItPositiveAndNegative(-50, 2))

/*
16)
Create a function to create new string with first 3 characters are in lower case and the others in upper case. If the string length is less than 3 convert all the characters in upper case. 
*/
function convertFirstThreeChars(string) {
  const stringCharsArray = string.split("")
  if (string.length < 3) {
    stringCharsArray[0] = stringCharsArray[0].toUpperCase()
    stringCharsArray[1] = stringCharsArray[1].toUpperCase()
  } else {
    stringCharsArray[0] = stringCharsArray[0].toLowerCase()
    stringCharsArray[1] = stringCharsArray[1].toLowerCase()
    stringCharsArray[2] = stringCharsArray[2].toLowerCase()
    for (let i = 3; i < stringCharsArray.length; i++) {
      stringCharsArray[i] = stringCharsArray[i].toUpperCase()
    }
  }
  return stringCharsArray.join("")
}

console.log("Ex16: ", convertFirstThreeChars("Strive School"))

/*
17)

Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.

18)

Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:

If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".

19)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC

*/
