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