//1. Given an array of numbers, return a new array that has only the numbers that are equal to 5 or greater.

function fiveAndGreaterOnly(arr) {
  return arr.filter(num => num >= 5);
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

//2. Given an array of numbers, return a new array that only includes the even numbers.

function evensOnly(arr) {
  return arr.filter(num => num %2 == 0);
}

console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

//3. Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(string => string.length <= 5);
}

console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]

//4. Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter(person => person.member === true);
}

console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

//5. Make a filtered list of all the people who are old enough to see The Matrix (older than 18).

function ofAge(arr){
  return arr.filter(person => person.age >= 18);
}

console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 

//6. Given an array of objects representing employees, create an array of objects containing their names and salaries, where the salary is increased by 10%.

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 }
];

const updatedSalaries = employees.map(employee => ({ name: employee.name, salary: employee.salary * 1.1 }));

console.log(updatedSalaries); // [{ name: "Alice", salary: 55000 }, { name: "Bob", salary: 66000 }, { name: "Charlie", salary: 77000 }]

//7. Given an array of objects representing customers, create an array of objects containing their names and whether they have an account.

const customers = [
  { name: "Alice", hasAccount: true },
  { name: "Bob", hasAccount: false },
  { name: "Charlie", hasAccount: true }
];

const customerAccounts = customers.map(customer => ({ name: customer.name, hasAccount: customer.hasAccount }));

console.log(customerAccounts); // [{ name: "Alice", hasAccount: true }, { name: "Bob", hasAccount: false }, { name: "Charlie", hasAccount: true }]

//8. Given an array of objects representing products, create an array of objects containing only their names and prices, where the price is doubled.

const products = [
  { name: "Apple", price: 1.00 },
  { name: "Banana", price: 0.50 },
  { name: "Orange", price: 1.20 }
];

const updatedProducts = products.map(product => ({ name: product.name, price: product.price * 2.00}));

console.log(updatedProducts); // [{ name: "Apple", price: 2.00 }, { name: "Banana", price: 1.00 }, { name: "Orange", price: 2.40 }]

//9. Given an array of objects containing the name and age of people, create a new array with the names of people who are above 18 years old.

const people = [
  { name: "John", age: 25 },
  { name: "Sara", age: 17 },
  { name: "Mike", age: 30 }
];

const adultNames = people 
    .filter(person => person.age > 18)
    .map(person => person.name);



console.log(adultNames); // Output: ['John', 'Mike']

//10. Given an array of objects containing the title and year of publication of books, create a new array with only the titles of books published in or after 2010.

const books = [
  { title: "The Hunger Games", year: 2008 },
  { title: "The Girl with the Dragon Tattoo", year: 2005 },
  { title: "The Fault in Our Stars", year: 2012 },
  { title: "Gone Girl", year: 2012 }
];

const recentBooks = books
    .filter(book => book.year >= 2010)
    .map(book => book.title);

console.log(recentBooks); // Output: ['The Fault in Our Stars', 'Gone Girl']

//11. Given an array of objects containing the name and age of people, create a new array with the age of each person converted from years to months.

const people1 = [
  { name: "John", age: 25 },
  { name: "Sara", age: 17 },
  { name: "Mike", age: 30 }
];

const ageInMonths = people1.map (person => {
    return {
        name: person.name,
        age: person.age * 12
    };
});

console.log(ageInMonths); 
// Output: [{ name: 'John', age: 300 }, { name: 'Sara', age: 204 }, { name: 'Mike', age: 360 }]

//12. Given an array of objects containing the name and email of users, create a new array with only the domain names of their email addresses.

const users = [
  { name: "John", email: "john@example.com" },
  { name: "Sara", email: "sara@gmail.com" },
  { name: "Mike", email: "mike@hotmail.com" }
];

const domains = users.map( user => {
    return user.email.split('@')[1];
});

console.log(domains); // Output: ['example.com', 'gmail.com', 'hotmail.com']

//13. Given an array of objects containing the name and price of products, create a new array with the names and discounted prices (10% off).

const products1 = [
  { name: 'T-Shirt', price: 20 },
  { name: 'Jeans', price: 50 },
  { name: 'Sneakers', price: 80 }
];

const discountedProducts = products1.map(product => {
    return {
        name: product.name, price: product.price * 0.9
    };
});

console.log(discountedProducts);
// Output: [ { name: 'T-Shirt', price: 18 }, { name: 'Jeans', price: 45 }, { name: 'Sneakers', price: 72 } ]

//14. Given an array of objects containing the name and birth year of people, create a new array with their names and ages.

const people2 = [
  { name: 'John', birthYear: 1993 },
  { name: 'Jane', birthYear: 1986 },
  { name: 'Alice', birthYear: 1979 }
];

const ages = people2.map(person => {
    return {
        name: person.name, age: 2023 - person.birthYear
    };
});

console.log(ages);
// Output: [ { name: 'John', age: 30}, { name: 'Jane', age: 37 }, { name: 'Alice', age: 44 } ]

//15. Given an array of objects containing the name and email of users, create a new array with their email addresses in a custom format.

const users1 = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' },
  { name: 'Alice', email: 'alice@example.com' }
];

const formattedEmails = users1.map( person => {
    return {
        name: person.name, email: person.email.replace('@', '_at_')
    };
});

console.log(formattedEmails);
// Output: [ { name: 'John', email: 'john_at_example.com'

//16. Given an array of objects representing books, return an array of their titles and authors concatenated.

const books1 = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' }
];

const titlesAndAuthors = books1.map (book => `${book.title} by ${book.author}`);


console.log(titlesAndAuthors); // ['The Great Gatsby by F. Scott Fitzgerald', 'To Kill a Mockingbird by Harper Lee', '1984 by George Orwell']

//17. Given an array of objects representing cars, use filter to create a new array with just the cars that are made by Toyota.

const cars = [
  { make: 'Toyota', model: 'Camry' },
  { make: 'Ford', model: 'F-150' },
  { make: 'Toyota', model: 'Corolla' },
  { make: 'Honda', model: 'Accord' },
];

const toyotaCars = cars.filter (car => car.make === 'Toyota')

console.log(toyotaCars); // [{ make: 'Toyota', model: 'Camry' }, { make: 'Toyota', model: 'Corolla' }]

//18. Given an array of objects representing students, use filter to create a new array with just the students who have a grade of A, and then use map to create a new array with just their names.

const students = [
  { name: 'Alice', grade: 'B' },
  { name: 'Bob', grade: 'A' },
  { name: 'Charlie', grade: 'C' },
  { name: 'David', grade: 'A' },
];

const topStudents = students 
    .filter(student => student.grade === 'A')
    .map(student => student.name);

console.log(topStudents); // ['Bob', 'David']

//19. Given an array of objects representing books, use filter to create a new array with just the books that were published in the last 5 years, and then use map to create a new array with just the book titles.

const books2 = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2020 },
  { title: 'The Fault in Our Stars', author: 'John Green', year: 2022 },
];

const recentBookTitles = books2 
    .filter(book => book.year > 2018)
    .map(book => book.title);

console.log(recentBookTitles); // ['The Hunger Games', 'The Fault in Our Stars']

//20. Given an array of objects representing movies, use filter to create a new array with just the movies released after the year 2000, and then use map to create a new array with just their titles.

const movies = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Dark Knight', year: 2008 },
  { title: 'Inception', year: 2010 },
];

const recentMovieTitles = movies 
    .filter(movie => movie.year > 2000)
    .map(movie => movie.title);

console.log(recentMovieTitles); // ['The Dark Knight', 'Inception']

//21. Given an array of objects representing books, create a new object with only the books that were published before the year 2000 and after 2010 one object for before 2000 and another after 2010. hint(use reduce() here)

const books3 = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 },
  { title: 'The Hunger Games', author: 'Suzanne Collins', year: 2008 },
  { title: 'The Fault in Our Stars', author: 'John Green', year: 2012 },
];

const filteredBooks = books3.reduce((acc, book) => {
    if (book.year < 2000) {
        acc.before2000.push(book);
    } else if (book.year > 2010) {
        acc.after2010.push(book);
    }
    return acc;

}, { before2000: [], after2010: [] });

console.log(filteredBooks); 
// { before2000: [{ title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }], 
//   after2010: [{ title: 'The Fault in Our Stars', author: 'John Green', year: 2012 }] }