// function* generator() {
//   let count = 0;
//   while (true) {
//     if (count % 2 === 0) {
//       yield count;
//     }
//     count++;
//   }
// }

// let cal = generator();
// console.log(cal.next());
// console.log(cal.next());
// console.log(cal.next());
// console.log(cal.next());
// console.log(cal.next());

const user = { name: "alex", address: { city: "new york" } };

// console.log(user.name);
// console.log(user.address.city);
// console.log(profile);
console.log(user?.name);
console.log(user?.address?.city);
console.log(
  user?.profile?.city === undefined ? `Profile Not Found` : user?.profile?.city
);
