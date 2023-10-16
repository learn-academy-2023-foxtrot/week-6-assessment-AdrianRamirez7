// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.
describe("capitalizeName", () => {
  it("returns an array with a sentence about each person with their name capitalized.", () => {
      const hitchhikersCharacters = [
          { name: "ford prefect", occupation: "a hitchhiker" },
          { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
          { name: "arthur dent", occupation: "a radio employee" }
        ]
        // Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]
      expect(capitalizeName(hitchhikersCharacters)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// b) Create the function that makes the test pass.
const capitalizeName = (nestedObj) => {
  //since the output needs to be a new array with the similar values, a high order map method is needed 
   return nestedObj.map(value => {
       let seperateStr = value.name.split(" ")
       console.log(seperateStr)
       let capFirstStrChar = seperateStr[0][0].toUpperCase() + seperateStr[0].slice(1);
       //separateStr[0][0] accesses the first character of the first word. The second bracket notation that is concatinated will slice through the string to make sure 
       //the full word itself is printed out, not just the first character itself, for instance, it will print "Ford" sucessfully instead of just "F."
       console.log(capFirstStrChar)
        let capSecondStrChar = seperateStr[1][0].toUpperCase() + seperateStr[1].slice(1)
        //separateStr[1][0] accesses the first character of the second word. The same rule of the first variable "capFirstStrChar" applies here.
       return `${capFirstStrChar} ${capSecondStrChar} is ${value.occupation}.`
       //with both the first and second worc characters capatilized, they can be connected using string interpolation
       //that also uses dot notation on "occupation" to access its value in the second key value pair to make the full sentenct
   })
};


// Pseudo code:
/*
function name: capitalize name
input: an array that nests an object that holds the key value pairs of name, string value and occupation, string value.
output: A new array that only displays first value's string with both the first and second word's starting character capitalized
process: 1)Inside the arrow function that is taking an input of the nested object, 
2)the input can be chained to a high order Map method that returns a new array with the same values. Only this time, it will grabing the first key value pairs string. 
3) Since this string in particular needs both the first and second starting character capitalized, a good way to grab both strings at once since they are on the same line is the "split method," this built in string method will help make sure both
strings can be accesed because they will turn into an array. From this point, we can grab them as elements and it makes the task easier. For instance, now 
both strings can be accesed as elements using zero based indexing which makes it possible to modify them one at a time. Afterwards, I seperate both strings into seperate 
variables and accesss their first character. 
4) This process is done using double bracket notation. The double bracket notation will start with the first bracket [0], which
is the first element in the array, and the second bracket notation number chained to is [1], which acceses the first character inthe first word. In addtion, with the 
first character accessed, and with the process of dot notation since we are accessing the objects first key value pair "name." we can chain the double bracket notation
syntax with a built in method ".toUpperCase()" that will capitalize the first character. 
5)Afterwards, the new string is concatinated with a slice method that will make sure the full word is printed is displayed not just the character itself. This same process will be done with the secong string, only this time, the bracket
notation will be accessing the second element in the array starting with [1][0] for the first character of the second word.
*/



// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.
describe("grabRemainder", () => {
  it("returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]
    expect(grabRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(grabRemainder(hodgepodge2)).toEqual([ 2, 1, -1 ])    
  })
})


// b) Create the function that makes the test pass.
//arrow function that will take in an array of data types
const grabRemainder = (arr) => {
  //empty array literal is defined to receive new integer values.
  let newArr = []
  //arr parameter will be chained to a high order "forEach" method that will iterate over the array of elements
  arr.forEach(value => {
    if (typeof value === 'number') {
      
      newArr.push(value % 3)
    }
  });
  return newArr
}

// Pseudo code:
/*
input: array elements of mixed data types
output: remainder of numbers data types inside the array cubed.
process: 1) create a an empty array literal since that output is expecting only numbers. We need to make sure this new array does not contain
strings. 
2) Need to iterate and evaluate each data type. Two ways of approaching this can be with two specific high order methods such as "forEach" and "filter". 
However, forEach would work fine for this particular problem since we only need to evaluate a certain data type
3) The particular data type would be number. A way to evelaute this is to declare a conditional statement after chaining the input arr parameter to the 
forEach method. By calling only a value as the input, the high order method body will contain the conditional statement that will check what 
specific iteration is a number. This is done using the 'typeof' method, which will determine if the value is a number data type using a strict equality
operator.
4) If the statement is true, then the integer executed inside the if block will be pushed to the newArr variable, and be evaulauted for its remiander
of 3 using a modulo operator placed inside the push methods arguments.
*/

// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedNumbers", () => {
  it("returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125
    expect(cubedNumbers(cubeAndSum1)).toEqual(99)
    expect(cubedNumbers(cubeAndSum2)).toEqual(1125)
  })
})


// b) Create the function that makes the test pass.
const cubedNumbers = (sumCubed) => sumCubed.reduce((sum, numValue) => sum + Math.pow(numValue, 3), 0);



// Pseudo code:
/*
input: array of all number data type elements
output: All the numbers in the array added together as a whole and multiplied by three or 'cubed'
process: 
1) Since the first output of this problem wants the sum of all numbers. We can achieve this using a high order method 'reduce' is a method 
in JavaScript is like a tool you can use to add up or combine values in an array to get a single result.
2) 
reduce methods begins with its two parameters sum and numValue, numValue in this case would be the current number in the array while the sum is 
keeping track of the of the total numbers added. When the reduce method finishes processing all numbers return to its current value 'numValue'
3) Since we need the the current value of all sumed numbers to be cubed, we can use the built in number method Math.pow, which will give a single 
integer value exponential form. In this case numValue ** 3, this will cube the total. 
4) Finally, the function also is  starting with an initial sum of 0 and repeatedly updating the sum with the cubed value of each number in the array. 
*/