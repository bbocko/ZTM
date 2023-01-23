// #1 change this function into a ternary and assign it to variable called experiencePoints

// function experiencePoints() {
//     if (winBattle()) {
//         return 10;
//     } else {
//         return 1;
//     }
// }

// My solution
// function winBattle(bool) {
//   return bool;
// }

// var experiencePoints = winBattle() ? 10 : 1;


// Using this function, answer the questions below:
// function moveCommand(direction) {
//     var whatHappens;
//     switch (direction) {
//         case "forward":
//             break;
//             whatHappens = "you encounter a monster";
//         case "back":
//             whatHappens = "you arrived home";
//             break;
//             break;
//         case "right":
//             return whatHappens = "you found a river";
//             break;
//         case "left":
//             break;
//             whatHappens = "you run into a troll";
//             break;
//         default:
//             whatHappens = "please enter a valid direction";
//     }
//     return whatHappens;
// }

// #2 return value when moveCommand("forward");
//   undefined //brakes first
// #3 return value when moveCommand("back");
//   "you arrived home"
// #4 return value when moveCommand("right");
//   "you found a river"
// #5 return value when moveCommand("left");
//   undefined //brakes first
// BONUS: practice makes perfect. Go and write your own switch function. It takes time to get used to the syntax!


// change everything below to the newer Javascript!

// let + const
// let a = 'test';
// const b = true;
// let c = 789;
// a = 'test2';


// Destructuring
// var person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;

// My solution
// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age       : 50,
//     eyeColor  : "blue"
// };

// const { firstName, lastName, eyeColor } = person;
// let { age } = person;

// Object properties
// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//   a: a,
//   b: b,
//   c: c
// };

// My solution
// let a = 'test';
// let b = true;
// let c = 789;

// const okObj = {
//   a,
//   b,
//   c
// };

// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";

// My solution
// let firstName = "Blaž";
// let city = "Hrastnik";
// let message = `Hello ${firstName}, have I met you before? I think we met in ${city} last summer no???`;

// default arguments
// default age to 10;
// function isValidAge(age) {
//     return age
// }

// My solution
// function isValidAge(age=10) {
//   return age
// }


// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

// My solution
// const whereAmI = (username, location) => {return (username, location) ? "I am not lost" : "I am totally lost!"}


// Solve these problems:

// #1 Create a one line function that adds two parameters

// My solution
// const sum = (a, b) => a + b;

// Closure: What does the last line return?
// const addTo = x => y => x + y
// var addToTen = addTo(10)
// addToTen(3)

// My solution
// 13

// Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// curriedSum(30)(1)

// My solution
// 31

// //Currying: What does the last line return?
// const sum = (a, b) => a + b
// const curriedSum = (a) => (b) => a + b
// const add5 = curriedSum(5)
// add5(12)

// My solution
// 17

// //Composing: What does the last line return?
// const compose = (f, g) => (a) => f(g(a));
// const add1 = (num) => num + 1;
// const add5 = (num) => num + 5;
// compose(add1, add5)(10)

// My solution
// 16

// What are the two elements of a pure function?

// My solution
// Avoid side effects, always return something (value) - deterministic approach.

// Complete the below questions using this array:
// const array = [
//     {
//         username: "john",
//         team: "red",
//         score: 5,
//         items: ["ball", "book", "pen"]
//     },
//     {
//         username: "becky",
//         team: "blue",
//         score: 10,
//         items: ["tape", "backpack", "pen"]
//     },
//     {
//         username: "susy",
//         team: "red",
//         score: 55,
//         items: ["ball", "eraser", "pen"]
//     },
//     {
//         username: "tyson",
//         team: "green",
//         score: 1,
//         items: ["book", "pen"]
//     },
// ];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
// const newArray = [];
// const addToUsername = array.forEach((obj) => {
//     newArray.push(obj.username = obj.username + "!");
// });
// console.log(newArray);


//Create an array using map that has all the usernames with a "? to each of the usernames
// const mapArray = array.map((obj) => {
//     return obj.username + "?";
// });
// console.log(mapArray);


//Filter the array to only include users who are on team: red
// const filterArray = array.filter((obj) => {
//     return obj.team === "red";
// });
// console.log(filterArray);


//Find out the total score of all users using reduce
// const reduceArray = array.reduce((acc, obj) => {
//     return acc + obj.score;
// }, 0);
// console.log(reduceArray);

// (1), what is the value of i?
// It's the index of the array.
// (2), Make this map function pure:
// const arrayNum = [1, 2, 4, 5, 8, 9];
// const newArray = arrayNum.map((num, i) => {
//     return num * 2;
// })


//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
// const answer = array.map(user => {
// 	user.items = user.items.map(item => {
// 		return item + "!"
// 	});
// 	return user;
// })
// console.log(answer);