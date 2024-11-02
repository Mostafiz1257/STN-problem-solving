// Function to square a number
function square(num) {
    return num * num;
  }
  
  // Function to double a number
  function double(num) {
    return num * 2;
  }
  
  // Function to add 5 to a number
  function addFive(num) {
    return num + 5;
  }
  
  // Compose function that squares, then doubles, then adds 5
  function squareDoubleAddFive(num) {
    return addFive(double(square(num)));
  }
  
  // Test the composed function
  const result = squareDoubleAddFive(3);
  console.log(result);
  