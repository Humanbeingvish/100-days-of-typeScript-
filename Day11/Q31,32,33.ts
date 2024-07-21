let Users: string[] = [""];

if (Users.length === 0) {
  console.log("We need to add some users");
}

///Q32..
let current_users: string[] = [
  "Hari",
  "homelander",
  "starlight",
  "firecracker",
  "deep",
];
let new_users: string[] = [
  "homelander",
  "starlight",
  "deadpool",
  "sage",
  "soliderboy",
];

let current_user_lower = current_users.map((user) => user.toLowerCase());

for (let i = 0; i < new_users.length; i++) {
  let NewUser = new_users[i];
  let NewUsertoLowerCase = NewUser.toLowerCase();
  if (current_user_lower.includes(NewUsertoLowerCase)) {
    console.log(`You need to find a new UserName ${NewUsertoLowerCase}`);
  } else {
    console.log(`UserName Available  ${NewUsertoLowerCase}`);
  }
}

//Q33....

let Ordinalnumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// for (let i = 0; i < Ordinalnumber.length; i++) {
//   if (i == 1) {
//     console.log(`${i}st`);
//   } else if (i == 2) {
//     console.log(`${i}nd`);
//   } else if (i == 3) {
//     console.log(`${i}rd`);
//   } else if (i == 4) {
//     console.log(`${i}th`);
//   } else if (i == 5) {
//     console.log(`${i}th`);
//   } else if (i == 6) {
//     console.log(`${i}th`);
//   } else if (i == 7) {
//     console.log(`${i}th`);
//   } else if (i == 8) {
//     console.log(`${i}th`);
//   } else if (i == 9) {
//     console.log(`${i}th`);
//   }
// }

//the other approach...

Ordinalnumber.forEach((number) => {
  let Suffix = "th";
  if (number === 1) {
    Suffix = "st";
  } else if (number === 2) {
    Suffix = "nd";
  } else if (number === 3) {
    Suffix = "rd";
  }
  console.log(` ${number} ${Suffix}`);
});
