// let input =document.querySelector ("input");
//   result = document.querySelector (".result");

//   input.oninput = function () {
//     let usd = input.value;
//     let egy = input.value * 15.6;
//     result.textContent = `{${usd} USD Dollar =${egy.toFixed(2)} Egyption Pounds}`
//   };

let input = document.querySelector("input");
let result = document.getElementsByClassName("result")[0];
input.oninput = function () {
  let usd = input.value;
  let egy = input.value * 15.6;
  result.textContent = `{${usd}} USD Dollar = {${egy.toFixed(
    2
  )}} Egyptipn Pound`;
};

let divone = document.querySelector(".one");
let divtow = document.querySelector(".tow");

divone.title = divone.className;
divtow.title = divtow.className;

divone.textContent = divone.className;
divtow.textContent = divtow.className;
console.log(divone);
console.log(divtow);

divtow.textContent = `${divtow.className} ${divtow.attributes.length} `;

// for (let img of document.images) {
//   img.hasAttribute("alt") ? (img.alt = "old");
// }

// console.log(img);

// for (let img of document.images) {
//   img.hasAttribute("alt") ? img.alt = "old" : (img.alt = "Elzero New");
// }

// // console.log(document.images);
// for (let img of document.images) {
//   if(img.alt === "") {
//     img.alt = "Elzero new";
//   } else {
//     img.alt = "old";
//   }
// };

// for (let img of document.images) {
//   img.alt === "" ? img.alt = "Elzero new" : img.alt = "old";
// }

// if (document.images.alt)
// let element = document.querySelector(".our-element");
// element.nextElementSibling.remove();

// let before = document.createElement("div");
// let beforeText = document.createTextNode("Start");

// before.className = beforeText.textContent;
// before.setAttribute("title", `${beforeText.textContent} Element`);
// before.setAttribute("data-value", beforeText.textContent);

// before.appendChild(beforeText);
// element.before(before);

// let after = document.createElement("div");
// let afterText = document.createTextNode("End");
// after.className = afterText.textContent;
// after.setAttribute ("title", `${afterText.textContent} Element`);
// after.setAttribute("data-value", afterText.textContent);
// after.appendChild(afterText);
// element.after(after);

// let span = document.querySelector("span");

// console.log(span.nextSibling())

// let myNumber = [1, 2, 3, 4, 5];
// [a, , , , b] = myNumber;
// console.log(a * b);

// let mySkills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   ["PHP", "Python", ["Django", "Laravel"]],
// ];
// let [h, c, j, [p, y, [d, l]]] = mySkills;
// console.log(`mySkills Is: ${h}, ${c}, ${j}, ${p}`);

// let arr1 = ["Ahmed", "Sameh", "Sayed"];
// let arr2 = ["Mohamed", "Gamal", "Amir"];
// let arr3 = ["Haytham", "Shady", "Mahmoud"];
// let finalarray = [
//   "Ahmed",
//   "Sameh",
//   "Sayed",
//   "Mohamed",
//   "Gamal",
//   "Amir",
//   "Haytham",
//   "Sahdy",
//   "Mohmoud",
// ];
// [c, , , , , , , a, b] = finalarray;
// console.log(`My Best Friends Is: ${a}, ${b}, ${c}`);
// let [, a, b, , , e] = arr3.concat(arr1);
// console.log(`${a}, ${b}, ${e}`);

// const member = {
//   age: 30,
//   working: true,
//   country: "Egypt",
//   hobbies: ["Reading", "Swimming", "Programming"],
// };
// const {
//   age: a,
//   working: w,
//   country: c,
//   hobbies: [h1, h2, h3],
// } = member;
// // console.log(`My Age Is ${a} And Iam ${w == false ? "Not " : ""}working`);
// console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
// console.log(`I Live In ${c}`);
// console.log(`My Hobbies Is: ${h1} And ${h3}`);

// const game = {
//   title: "YS",
//   developer: "Falcom",
//   releases: {
//     "Oath In Felghana": ["USA", "Japan"],
//     "Ark Of Napishtim": {
//       US: "20 USD",
//       JAP: "10 USD",
//     },
//     Origin: "30 USD",
//   },
// };
// // const { title: t, developer: d, releases [u, j]};

// let chosen = 1;

// let myFriends = [
//   { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
//   { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
//   { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
// ];

// let [
//   {
//     title: t,
//     age: a,
//     available: v,
//     skills: [one, tow],
//   },
// ] = myFriends(chosen === 1);
// if (chosen == 1) {
//   console.log(`${t}`);
// }
// console.log(new Date().getTime());

// let countDown = new Date("Dec 31, 2021 23:59:59").getTime();

// let dateNow = new Date().getTime();
// let defDate = countDown - dateNow;
// let days = defDate / 1000 / 60 / 60 / 24;
// console.log(days);
// days = Math.floor(defDate / (1000 * 60 * 60 * 24));
// console.log(days);
// let hours = (defDate % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60;
// console.log(hours);
// ----------------------------------

// setOfNumbers = new Set().add(10);
// console.log(setOfNumbers);

// // let setOfNumbers = new Set();
// let set = setOfNumbers;
// set.add(20).add(2);

// console.log(set);
// set = new Map();
// set.set("f", 2);
// console.log(set);

let setOfNumbers = new Set().add(10);
console.log(setOfNumbers);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers].pop());

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// myFriends = new Set(myFriends.sort());
// console.log(myFriends);
console.log([...new Set(myFriends)].sort());
// console.log([...(myFriends = new Set())].sort());
console.log([...myFriends].sort());
console.log([...new Set(myFriends)].sort());

let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};
console.log(myInfo);
myInfo = new Map([
  ["username", "Osama"],
  ["role", "Admin"],
  ["country", "Egypt"],
]);
console.log(myInfo);
console.log(myInfo.size);
console.log(myInfo.has("username"));

let theNumber = 100020003000;
// let f = theNumber.split("")
// theNumber = new Set();
// console.log(theNumber);
// let newNumber = Array.from([theNumber]);
// console.log([theNumber.join("")]);
console.log(+[...new Set(theNumber.toString())].sort().join(""));

// let theName = "Elzero";
// let s = Array.from(theName);
// console.log(s);
// s = theName.split("");
// console.log(s);
// let f = [...theName];
// console.log(f);
// let n = [...new Set(theName)];
// console.log(n);
// let five = Object.values(theName);

// console.log(five);

let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
chars.copyWithin(-3, 0, 2);
console.log(chars);

let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

let nums = [...numsOne, ...numsTwo];
console.log(nums);
console.log(Array.from([...numsOne, ...numsTwo]));
numsOne.push(...numsTwo);
console.log(numsOne);

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];
console.log([...n1, ...n2].length * Math.max(...n2));
