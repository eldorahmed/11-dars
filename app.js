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
