function maketshirt1(
  size: string = "medium",
  message: string = "I love typescript"
) {
  console.log(`This is the size ${size} and the message is ${message}`);
}

maketshirt1();
maketshirt1("large", "I love ");
maketshirt1("medium", "I love typescript");

//Q38

function describeCity(city: string, country: string = "India") {
  console.log(`${city} and the default country is ${country}`);
}

describeCity("Mumbai");
describeCity("Kolkata", "INdia");
