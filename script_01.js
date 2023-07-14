"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment
const ageJohn = 30;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
console.log("ageJohn: " + ageJohn);
console.log("ageMark: " + ageMark);
console.log("isJohnOlder: " + isJohnOlder);
console.log("isJohnEqual: " + isJohnEqual);
console.log("------------------");

/************ IF ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if(true)  //fake it, ´till you make it!
// if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter");  //control flow
// }

/************ IF - ELSE ************/

// mit Alternative
// entweder ja oder nein

// if (true)
// if (false)
// 1. TEST
if(isJohnOlder)
{
    console.log("John ist älter");  
} 
// 1...n Alternative
else if(isJohnEqual)
{
    console.log("John ist gleich alt ");  
}
// wenn alle vorherigen Alternativen fehlschlagen !
else
{
    console.log("john ist jünger")
}

/************ Ternäre (ternary) Schreibweise ************/

// console.log( (isJohnOlder) ? "John is older" : "Mark is older");
