// Array of book objects
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 }
  ];
  
  // Function to get an array of book titles
  function getBookTitles(bookArray) {
    return bookArray.map(book => book.title); // Map to an array of titles
  }
  
  // Get the result and print it
  const bookTitles = getBookTitles(books);
  console.log(bookTitles);
  