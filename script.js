/////////////////////////////////////////////////////
// Fat Arrows
// TODO: Re-create the following function using the ES6 fat arrow syntax.
/*
function powered2() {
    let values = []
    for (let i = 0; i < 100; i++) {
        let x = Math.pow(i, 2)
        values.push(x);
    }
    return values;
}
*/

let powered2 = () => {
    let values = [];
    for (let i = 0; i < 100; i++) {
        let x = Math.pow(i, 2)
        values.push(x);
    }
    return values;
}

console.log(powered2());


/////////////////////////////////////////////////////
// Anonymous Functions
// TODO: Create an anonymous function that prints the square root of a number.
// Hint: Use the built-in JavaScript Math function, sqrt().

(function(num){
    let value = Math.sqrt(num);
    console.log("the square root of " + num + " is " + value + ".");
})(4);


/////////////////////////////////////////////////////
// Default Parameters
// TODO: Create a function called player() and set up default parameters for the name, health, strength, and defense stats
// Hint: In the function, print out the player's name and stats.

function player(name = "Cheetah", health = 50, strength = 4, defense = 1){
    console.log("Welcome " + name + "!");
    console.log("Health: " + health + " Strength: " + strength + " Defense: " + defense);
}

player();


/////////////////////////////////////////////////////
// Destructuring Assignment
// TODO: Store the first 5 array values in separate variables and the remaining values in the "rest" variable.
function getCosine() {
    let values = [];
    for (let i = 0; i < 10; i++) {
        let x = Math.cos(10);
        values.push(x);
    }

    let first, second, third, fourth, fifth, rest;
    [first, second, third, fourth, fifth, ...rest] = values;
    
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(rest);
    
}
getCosine();
