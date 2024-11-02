// Array of car objects
const cars = [
    { make: "Toyota", model: "Camry", year: 2019 },
    { make: "Honda", model: "Civic", year: 2017 },
    { make: "Ford", model: "Mustang", year: 2021 },
    { make: "Chevrolet", model: "Malibu", year: 2018 }
  ];
  
  // Function to sort cars by year in ascending order
  function sortCarsByYear(carArray) {
    return carArray.sort((a, b) => a.year - b.year);
  }
  
  // Get the sorted result and print it
  const sortedCars = sortCarsByYear(cars);
  console.log(sortedCars);
  