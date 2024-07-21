let StagesOfLife = 25;

if (StagesOfLife <= 2) {
  console.log("The person is a Baby");
} else if (StagesOfLife >= 3 && StagesOfLife <= 4) {
  console.log("The person is a Toddler");
} else if (StagesOfLife >= 5 && StagesOfLife <= 12) {
  console.log("The person is a Kid");
} else if (StagesOfLife >= 13 && StagesOfLife <= 19) {
  console.log("The person is a Teenager");
} else if (StagesOfLife >= 20 && StagesOfLife <= 64) {
  console.log("The person is an Adult");
} else {
  console.log("The person is an Elder");
}

//..Q29

let fav_fruits: string[] = ["Ice Apple", "Orange", "JackFruit"];

if (fav_fruits.includes("Ice Apple")) {
  console.log("Your favourite fruit is iceapple");
}
if (fav_fruits.includes("Orange")) {
  console.log("Your favourite fruit is orange");
}

//..Q30
let UserName: String[] = [
  "Admin",
  "HomeLander",
  "A-train",
  "Deep",
  "StarLight",
];

UserName.forEach((UserName) => {
  if (UserName == "Admin") {
    console.log("Would you like to see the report admin");
  } else {
    console.log(`Hello ${UserName} thanks for logging in again`);
  }
});
