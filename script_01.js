"use strict";

/*Entscheidungsstrukturen | control flow */

// Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// // Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// // Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

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
// if(isJohnOlder)
// {
//     console.log("John ist älter");  
// } 
// // 1...n Alternative
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt ");  
// }
// // wenn alle vorherigen Alternativen fehlschlagen !
// else
// {
//     console.log("john ist jünger")
// }

/************ Ternäre (ternary) Schreibweise ************/

// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

/****** Fallunterscheidung / SWITCH|CASE 1 ******/


// const firstName = "Jane";
// let job;
 
// // job = prompt("Welchen Job hast du ?");

// job = "driver";         // .. fährt TAXI! / UBER
// job = "diver";          // .. taucht im Rhein!
// job = "artist";         // .. malt ein Bild!
// job = "pilot";          // .. macht etwas anderes! --> default
// job = "teacher";        // .. unterrichtet!
// job = "instructor";     // .. unterrichtet!

// switch (job)
//  {
//     case "driver":
//         console.log("Jane fährt Taxi!")
//         break;
//     case "diver ":
//         console.log("Jane taucht im Rhein!")
//         break;
//     case "artist":
//         console.log("Jane malt ein Bild!")
//         break;
//     case "teacher":
//     case "instructor":
//         console.log("Jane unterrichtet!")
//         break;
//     // case "instructor":     // selbe beschreibung kann verbunden werden mit case 
//     //     console.log("Jane unterrichtet!")
//         break;
//     default:           // default immer zuerst!
//         console.log("jane macht etwas anderes!ERROR")
//         break;
// }

/******** Fallunterscheidung / SWITCH|CASE 2 *******/

 

const cond = true;
const a = 2;


switch (cond) {
    case (a==1):
        console.log("a ist gleich 1!");
        break;
    case (a==2):
        console.log("a ist gleich 2!");
        break;
    default:
        console.log("a hat einen anderen Wert!");
        break;
}