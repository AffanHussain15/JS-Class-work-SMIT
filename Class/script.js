// function reverseWords(a) {
//   //   let makeArr = a.split(" ");
//   //   let reverseWordIntoArr = makeArr.map((item, index) => {
//   //     return item.split("").reverse().join("");
//   //   });

//   //   let arrayConvertIntoWord = reverseWordIntoArr.join(" ");
//   //   return arrayConvertIntoWord;
//   return a
//     .split(" ")
//     .map((item) => item.split("").reverse().join(""))
//     .join(" ");
// }

// function arr(){
//     let make = a.split(" ");
//     let reverse = make.map((item, index) => {
//         return item.split("").reverse().join("");
//     });
//     console.log(a);
// }

// function kaamPuraHua(message){
//     console.log("Call back Function chal gaya " + message );
// };

// kaamPuraHua();

// function kaamkaro(callBack){
//     callBack("Yeh hai callback ka message.");
//     // console.log("kaam shuru ho gaya");
//     // setTimeout(() => {
//         // console.log("kaam pura ho gaya");
//     // }, 1000);
// };

// kaamkaro(kaamPuraHua);

// function one(){
//     console.log("first");
// };

// function two(){
//     console.log("second");
// };

// one();
// two();

// function countDown(message){
//     console.log("countDown " + message);
// }

// function secCountDown(callBack){
//     setTimeout(() => {
//         console.log(1);
//         setTimeout(() =>{
//             console.log(2);
//             setTimeout(() =>{
//                 console.log(3);
//                 setTimeout(() =>{
//                     console.log(4);
//                     setTimeout(() =>{
//                         console.log(5);
//                         setTimeout(() =>{
//                             callBack("Completed");
//                         }, 1000)
//                     }, 1000)
//                 }, 1000)
//             }, 1000)
//         }, 1000)
//     }, 1000);

// }

// secCountDown(countDown)

// function countDown() {
//   let arr = [5,4,3,2,1];
//   for (let i = 5; i >= 0; i--) {
//     console.log(i);
//   }
// }
// countDown();

// console.log(countDown);

// function cb(message) {
//   console.log(message);
// };

// function countDown(timer, callBack) {
//   if (timer > 0) {
//     setTimeout(() => {
//       console.log(timer);
//       countDown(timer - 1, callBack);
//     }, 500);
//   } else {
//     setTimeout(() => {
//       callBack("CountDown Completed!");
//     }, 500);
//   }
// };

// countDown(5, cb);


let map = new Map();

let obj1 = {id: 1};
let obj2 = {id: 2};


map.set(obj1,"object 1");
map.set(obj2,"object 2");

function multiplyby(x){
  return function(y){
    return x * y
  };
}

const multiplyby2 = multiplyby(2);
console.log(multiplyby2(5));