// Array of people objects
const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
    { name: "Diana", age: 40, gender: "female" },
    { name: "Edward", age: 45, gender: "male" }
  ];
  
  // Function to filter out females and map remaining to names
  function getMaleNames(peopleArray) {
    return peopleArray
      .filter(person => person.gender === "male") // Filter out only males
      .map(person => person.name); // Map to an array of names
  }
  
  // Get the result and print it
  const maleNames = getMaleNames(people);
  console.log(maleNames);

  
  //output:
  