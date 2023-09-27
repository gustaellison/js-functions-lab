console.log('its all connected')

//defining a function
// declaring function
//creating the reusable block of code
// to be used at a later time in the program
function sayHello(personsName) {
    // write the code to say hello here
    console.log(`Hello  ${personsName}`)
}
//execute the function
//invoke the function
//call the function

// write the function name ()
sayHello('Jim'); //runs the block of code defined by the sayHello function
sayHello('Augusta');
sayHello('Melissa');
sayHello('Brad');

function sayGoodbye(phrase, person) {
    console.log(`${phrase}, ${person}`)
    //return `${phrase}, ${person}` //I think this would need to mirror the getPlayerUserName with defined variables and calling functions for each

}
    
sayGoodbye('Adios', 'Laura')
sayGoodbye('Chao', 'Becky')
sayGoodbye('Goodbye', 'Chad')
sayGoodbye('Peace', 'Frankie')

function add(x , y){
    return x + y + ' is the answer.'
}

console.log(add(2, 2), 'Look at this')

function getPlayerUserName(username){
    return username.toUpperCase();
}
//before they join the game we dont know their user name
let playerOne;
let playerTwo;
let playerThree;
let playerFour;

//after the join, we set the players name

playerOne = getPlayerUserName('Augusta')
playerTwo = getPlayerUserName('Jon')
playerThree = getPlayerUserName('Alyssa')
playerFour = getPlayerUserName('Dilly')

// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2. 
  /*Define a function, as a function expression, maxOfThree 
  that takes three numbers as arguments and returns the largest 
  of them. Again, the Math.max method is not allowed.
*/

function maxOfThree(x, y, z) {
    if ( x >= y && x >= z){
        return x;
    } else if ( y >= x && y >= z){
        return y;
    } else {
        return z;
    }
}

console.log(maxOfThree(6, 4, 10))

// 3.
  /*Define a function, as a function declaration, isCharAVowel that 
  takes a character as an argument and returns true if it is a vowel, 
  false otherwise.
*/
function isCharAVowel(letter) {
    if (letter === 'a' || letter ==='e' || letter ==='i' || letter ==='o' || letter ==='u') {
        return 'it is a vowel';
    } else {
        return 'it is not a vowel'
            }
}

let testLetter = "b"

console.log(isCharAVowel(testLetter))

// 4. 
  /*Define a function, as a function expression, sumArray that 
  takes an array of numbers and returns the sum of those numbers.
   For example, sumArray([2, 4, 5]); would return 11
*/


let sumArray = function(arr) {
    let total = 0
    for (let i = 0; i < arr.length - 1; i++){
        total += arr[i]
    }
    return total
}
console.log(sumArray([3, 4, 6, 10]))
console.log(sumArray([5, 7, 9]))


//  arr.forEach(function (nums) {
//     total += nums
//  })



// 5. 
/* Define a function, as a function declaration, multiplyArray that 
takes an array of numbers and returns the product those numbers. 
For example, multiplyArray([2, 4, 5]); would return 40.
*/

function multiplyArray (arr) {
    let total = 1
    arr.forEach(function(num){
        total *= num
    })
    return total
}
console.log(multiplyArray([10, 10, 8]))

// 6 Define a function, as a function expression, numArgs 
//that returns the number of arguments passed to the function when called.
let numArgs = function()



// 9.
/* Define a function, as a function declaration, stringsLongerThan 
that takes an array of strings and a number as arguments; and returns an
array of the strings that are longer than the number passed in. For example, 
stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return 
["hello", "morning"].
*/

function stringsLongerThan(strArray, num){
    for (let i = 0; i < strArray.length - 1; i++){
    
}    
}

