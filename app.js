// 1-masala
// let str = "34567";
// let arr = [];
// function changeToArray(str) {
//   for (i = 0; i < str.length; i++) {
//     arr.unshift(str[i]);
//   }
//   return arr;
// }
// console.log(changeToArray(str));

// 2-masala

// == va === ning farqi: === datatype ni ham tekshiradi, == faqat qiymatni tekshiradi.

// if (1 === "1") {
//   console.log(true);
// } else {
//   console.log(false);
// }
// if (1 == "1") {
//   console.log(true);
// } else {
//   console.log(false);
// }

// 3-masala
// let i = 0;
// let n = 10;
// let arr = [];
// function count(n) {
//   if (i < n) {
//     i++;
//     arr.push(i);
//     count(n);
//   }
//   return arr;
// }
// count(n);
// console.log(arr);

// 4-masala

// let arr = [1, 2, 3, 4, 5];

// const evens = arr
//   .filter((el) => el % 2 == 0)
//   .reduce((acc, curVal) => {
//     acc += curVal;
//     return acc;
//   }, 0);
// const odds = arr
//   .filter((el) => el % 2 == 1)
//   .reduce((acc, curVal) => {
//     acc += curVal;
//     return acc;
//   }, 0);

// console.log([evens, odds]);

// 5-masala
// let newStr = "";
// let str = "Men!! developerman!!!";
// function removeChar(str) {
//   for (i = 0; i < str.length; i++) {
//     if (str[i] !== "!") {
//       newStr += str[i];
//     }
//   }
//   return newStr;
// }
// console.log(removeChar(str));

// 6-masala
// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// function sumArr(arr1, arr2) {
//   let sum1 = arr1.reduce((acc, curVal) => {
//     acc += curVal;
//     return acc;
//   }, 0);
//   let sum2 = arr2.reduce((acc, curVal) => {
//     acc += curVal;
//     return acc;
//   }, 0);
//   return sum1 + sum2;
// }
// console.log(sumArr(arr1, arr2));

// 7-masala

// let str = "Men!! developerman!!!";
// let newStr = "";
// function deleteChar(str) {
//   for (i = 1; i < str.length - 1; i++) {
//     newStr += str[i];
//   }
//   return newStr;
// }
// console.log(deleteChar(str));

// 8-masala

// let arr = [1, 2, 3];
// let newArr = [];
// function reverseArr(arr) {
//   for (i = 0; i < arr.length; i++) {
//     newArr.unshift(arr[i]);
//   }
//   return newArr;
// }
// console.log(reverseArr(arr));

// 9-masala

// let str = "1000300";
// let newStr = "";
// let count = 0;
// function removeZero(str) {
//   let result = str
//     .split("")
//     .map((el) => +el)
//     .reverse();
//   for (i = 0; i < result.length; i++) {
//     if (result[i] != 0) {
//       break;
//     }
//     count++;
//   }
//   console.log(str.slice(0, -count));
// }
// removeZero(str);

// 10-masala

// let arr = [4, 5, 3, 2, 8];
// function findMin(arr) {
//   let min = Math.min(...arr) ** 4;
//   return min;
// }
// console.log(findMin(arr).toString());

// Qo'shimcha masalalar

// 1-masala

// let arr = [];
// function minMaxAv(a, b, c) {
//   arr.push(a, b, c);
//   let result = arr.sort((num1, num2) => num1 - num2);
//   return result;
// }
// console.log(minMaxAv(6, 1, 9));

// 2-masala

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ];
// books.forEach((el, index) => {
//   if (el.alreadyRead == true) {
//     console.log(
//       index + 1 + ". " + el.author + "ning " + el.title + " kitobi o'qilgan"
//     );
//   } else {
//     console.log(
//       index + 1 + ". " + el.author + "ning " + el.title + " kitobi o'qilmagan"
//     );
//   }
// });

// 3-masala

// const products = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];
// let sum = 0;
// products.forEach((el) => {
//   let result = el.price - (el.price / 100) * el.discount;
//   sum += result;
//   console.log(result);
// });
// console.log("jami:", sum);

// 4-masala

// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };
// let result = [];
// for (let key in obj) {
//   result.push(key);
//   result.push(obj[key]);
// }
// console.log(result);

// 5-masala

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];
// let sumGrade = 0;
// let sumkredit = 0;
// grades.forEach((el) => {
//   sumGrade += el.grade * el.kredit;
//   sumkredit += el.kredit;
// });
// console.log(sumGrade / sumkredit);

// 6-masala

// const rightAnswers = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const myAnswers = {
//   1: "B",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// let correct = 0;
// let wrong = 0;

// for (ask in rightAnswers) {
//   if (rightAnswers[ask] === myAnswers[ask]) {
//     correct++;
//   } else {
//     wrong++;
//   }
// }
// console.log(correct);
// console.log(wrong);

// 7-masala
// let n = 5;
// let j = 1;
// for (i = n; i >= 1; i--) {
//   console.log(i ** j);
//   j++;
// }
