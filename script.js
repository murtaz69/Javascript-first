/*let js = "awsome";
if (js === "awsome") alert("welcome to the new world");
20 + 45; 
console.log(20 + 45 -2);

let lesson = "first";


"murtaza";
console.log("murtaza");
console.log("adam");
console.log("Alex");
console.log("alex");


35;
console.log(35);
// we can just type value and not assigning it to a variable
// javascript wont give an error but this is not the convention and not
// efficient

// let firstName = "Murtaza";
// console.log(firstName);
// we declare a variable called firstName and then assign it a value of "Murtaza"
// we can then consol the variable that contains the value
// the output to the console will be "Murtaza"

//l et new = 22; 
// let function = 22; 
// new and function are reservered words in jv and you can not use 
// the declaring a variable.


// let name = "Murtaza"; 
// name is not reserved but its kinda reserved so it might cause problems if you use it
// so dont!


let week1 = 45;
let week = 46; 
// this is ok we declare two variables called week1 and week2
// but to be really clear and to make our code easier to read
let lastWeek = 45;
let currentWeek = 46;
// we can name them like this if its actually the current week and last week
// this makes it more clear of what value our variables actually holds


let firstName; 
// value of firstname is undefined, its undefined becouse we only declared a variable 
// we did not assign a value to it. 

firstName = "Murtaza"; 
// now we assign a value to the variable and its no longer underfined instead its "Murtaza"


// DATA TYPES

// Boolean values
// a boolean can be true or fals, we use it to desecitions in our code.

// true;
// console.log(true);
let youWillLearnJS = true;
console.log(youWillLearnJS);
// right way of decalring a boolean variable and assgning the value to true
youWillLearnJs = false;
// we change the value of our variable from true to false
console.log(youWillLearnJs);
// this time when we console log it it will return false. */



// we can use the built in operator typeof to know what data type our value is 
// OBS! data type and value are not the same  
console.log(typeof "Murtaza");
// here is the data type is string and the value is "Murtaza"
console.log(typeof 35); // here is data type number and the value is 35; 
console.log(typeof youWillLearnJS); // data type is boolean and the value is false.


console.log("Murtaza");
console.log(35);
console.log("youWillLearnJS");
// we only log the value to the consle, we don not log what data type we have here. 
console.log(20 + 8 + 1 -5);
// you can use operators to concatinate and subtract in javascript
// you can concatinate numbers aswell as strings

let firstName = 35; 
// console.log(firstName);
let lastName = "Saraa";
console.log(firstName);
console.log(lastName);
firstName = 20;
lastName = 35;
console.log(firstName);
console.log(lastName);
// above we are chaning the value of the two variables using the assignment operator =
let day;
console.log(day);
day = "wednesday";
console.log(day);
console.log(typeof null);
// typeof null is actually an error i javascript and will give you the result object
// which is not true at all because we learned earlier that null is one of the 7
// primitive values
// but it costs more to fix this than just leave it because of legacy reasons in javascript
// you will probably never encounbter this or use it at alla but now you know :)
// LET CONST VAR
// keywords that we use to declare varibles
// we use let to declare variables where the value might change in the future
// we use const when the value cant change


const me = "Murtaza";
// me = "hey"
