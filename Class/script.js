// // *** Reset Operators ***

// function restOperator() {
//   let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
//   let even = [];
//   for (let i = 0; i < array.length; i++) {
//       if (0 === array[i] % 10) {
//           even.push(array[i]);
//         }
//     }
//     console.log(even);
// }
// restOperator();

// // Math.max(array)
// // Math.max(array[i])
// // ...Affan
// // return
// // restOperator(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20);
// // console.log(Affan);
// // console.log(restOperator);

// // *** Spread Operator ***

// const arr1 = [1,2,3];
// const arr2 = [...arr1 , 4,5,6];
// const arr3 = [...arr2 , 7,8,9];
// const arr4 = [...arr3 , 10,11,12];
// const arr5 = [...arr4 , 13,14,15];
// const arr6 = [...arr5 , 16,17,18];
// const arr7 = [...arr6 , 19,20,21];
// const arr8 = [...arr7 , 22,23,24];

// let newarr = arr1 +" "+ arr2;

// console.log(arr8);

// // *** Enhance Object Literals ***

// const naam = "Affan";
// const umar = 12;
// let obj = {
//   naam,
//   umar,
// };

// console.log(obj);

// const person = {
//     name: 'Affan',
//     greet(){
//         console.log(`Hello, My name is ${this.name}.`);
//     }
// }

// person.greet();

// const key = "Hobby";

// const personc = {
//   name: "Affan",
//   [key]: "Cricket",
// };

// console.log(personc.Hobby);


// *** Concat ***

let concatArr1 = [1,2,3,4];
let concatArr2 = [5,6,7]
let mergeArray = concatArr1.concat(concatArr2,8,9);
console.log(mergeArray);