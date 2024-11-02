// Array of person objects
const people = [
    { name: "Alice", age: 25, gender: "female" },
    { name: "Bob", age: 30, gender: "male" },
    { name: "Charlie", age: 35, gender: "male" },
    { name: "Diana", age: 40, gender: "female" }
  ];
  
  // Function to search for a person by name and update their age
  function updatePersonAgeByName(personArray, personName, newAge) {
    const person = personArray.find(p => p.name === personName); // Search for the person by name
    if (person) {
      person.age = newAge; // Update age if person is found
    } else {
      console.log(`${personName} not found.`); // Optional message if not found
    }
  }
  
  // Update age for a specific person
  updatePersonAgeByName(people, "Bob", 32);
  
  // Print the updated array
  console.log(people);
  