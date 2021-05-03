// console.log(123);

// ПРИМЕРЫ ПЕРЕБЕРАЮЩИХ МАССИВОВ FOR OF & forEach

// const numbers = [5, 10, 15, 20, 25];

// // Классический for
// for (let i = 0; i < numbers.length; i += 1) {
//   console.log(`Индекс ${i}, значение ${numbers[i]}`);
// }
// console.log('interval');
// // Перебирающий forEach
// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// МОДУЛЬ 6 ЗАДАЧА №1

// КЛАССИЧЕСКИЙ МЕТОД for//

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   for (let i = 0; i < orderedItems.length; i += 1) {
//     totalPrice += orderedItems[i];
//   }

//   // Пиши код выше этой строки
//   console.log(totalPrice);
//   return totalPrice;
// }

// /КЛАССИЧЕСКИЙ МЕТОД for//

// МЕТОД forEach//

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Пиши код ниже этой строки

//   orderedItems.forEach(function (number) {
//     totalPrice += number;
//   });

//   // Пиши код выше этой строки
//   console.log(totalPrice);
//   return totalPrice;
// }


// calculateTotalPrice([12, 85, 37, 4]) // 138.
// calculateTotalPrice([164, 48, 291]) // 503.
// calculateTotalPrice([412, 371, 94, 63, 176]) // 1116.

// // /МЕТОД forEach//

// МОДУЛЬ 6 ЗАДАЧА №2

// КЛАССИЧЕСКИЙ МЕТОД for//

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] > value) {
//         filteredNumbers.push(numbers[i]);
//       }
//     }
  
//     // Пиши код выше этой строки
//   console.log(filteredNumbers);
//     return filteredNumbers;
// }
  // /КЛАССИЧЕСКИЙ МЕТОД for//

  // МЕТОД forEach//
// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Пиши код ниже этой строки
  
//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
  
//     // Пиши код выше этой строки
//   console.log(filteredNumbers);
//     return filteredNumbers;
// }
   // /МЕТОД forEach//

// filterArray([1, 2, 3, 4, 5], 3) // [4, 5].
// filterArray([1, 2, 3, 4, 5], 4) // [5].
// filterArray([1, 2, 3, 4, 5], 5) // [].
// filterArray([12, 24, 8, 41, 76], 38) // [41, 76].
// filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76].

// МОДУЛЬ 6 ЗАДАЧА №3

// КЛАССИЧЕСКИЙ МЕТОД for//
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//     for (let i = 0; i < firstArray.length; i += 1) {
//       if (secondArray.includes(firstArray[i])) {
//         commonElements.push(firstArray[i]);
//       }
//     }
//    console.log(commonElements);
//     return commonElements;
//     // Пиши код выше этой строки
//   }
// /КЛАССИЧЕСКИЙ МЕТОД for//

// МЕТОД forEach//
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Пиши код ниже этой строки
  
//   firstArray.forEach(function (number) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     }
//   });
//    console.log(commonElements);
//     return commonElements;
//     // Пиши код выше этой строки
//   }
// // /МЕТОД forEach//

// getCommonElements([1, 2, 3], [2, 4]) // [2].
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2].
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3].
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40].
// getCommonElements([1, 2, 3], [10, 20, 30]) // []

//Стрел
// ПРИМЕРЫ

// // Обычное объяв// function classicAdd(a, b, c) {
//   return a + b + c;
// }

// // Тоже самое как стрелочная функция
// const arrowAdd = (a, b, c) => {
//   return a + b + c;
// };

// МОДУЛЬ 6 ЗАДАЧА №4

// Пиши код ниже этой строки

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Пиши код выше этой строки
//   return quantity * pricePerItem;
// }

//Неявный возврат
// ПРИМЕРЫ
// const add = (a, b, c) => a + b + c;

// МОДУЛЬ 6 ЗАДАЧА №5

// Пиши код ниже этой строки
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;
// Пиши код выше этой строки


//Стрелкак коллбеки!!!!

// ПРИМЕРЫ

//EX. #1
// const numbers = [5, 10, 15, 20, 25];

// // Объяв// numbers.forEach(function (number, index) {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

// console.log('interval');

// // Анонимная стрелочная функция
// numbers.forEach((number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// });

//Ex. #2
// const numbers = [5, 10, 15, 20, 25];

// const logMessage = (number, index) => {
//   console.log(`Индекс ${index}, значение ${number}`);
// };

// numbers.forEach(logMessage);

// МОДУЛЬ 6 ЗАДАЧА №6

// Пиши код ниже этой строки
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });
// console.log(totalPrice);
//   return totalPrice;
// }
// // Пиши код выше этой строки

// calculateTotalPrice([12, 85, 37, 4]) // 138.
// calculateTotalPrice([164, 48, 291]) // 503.
// calculateTotalPrice([412, 371, 94, 63, 176]) // 1116.

// МОДУЛЬ 6 ЗАДАЧА №7

// Пиши код ниже этой строки
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];
  
//     numbers.forEach((number) => {
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     });
  
//     // Пиши код выше этой строки
//   console.log(filteredNumbers);
//     return filteredNumbers;
// }
  
// filterArray([1, 2, 3, 4, 5], 3) // [4, 5].
// filterArray([1, 2, 3, 4, 5], 4) // [5].
// filterArray([1, 2, 3, 4, 5], 5) // [].
// filterArray([12, 24, 8, 41, 76], 38) // [41, 76].
// filterArray([12, 24, 8, 41, 76], 20) // [24, 41, 76].


// МОДУЛЬ 6 ЗАДАЧА №8

// Пиши код ниже этой строки
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];
  
//     firstArray.forEach((element) => {
//       if (secondArray.includes(element)) {
//         commonElements.push(element);
//       }
//     });
//   console.log(commonElements);
//     // Пиши код выше этой строки
//     return commonElements;
// }
  
// getCommonElements([1, 2, 3], [2, 4]) // [2].
// getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2].
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3].
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40].


//Чистые функции!!!!
// ПРИМЕРЫ

// const pureMultiply = (array, value) => {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(element * value);
//   });

//   return newArray;
// };

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = pureMultiply(numbers, 2);

// // Не произошло мутации исходных данных
// console.log(numbers); // [1, 2, 3, 4, 5]
// // Функц// с изменёнными данными
// console.log(doubledNumbers); // [2, 4, 6, 8, 10]
// ПРИМЕРЫ//


// МОДУЛЬ 6 ЗАДАЧА №9

// КЛАССИЧЕСКИЙ МЕТОД for//

// function changeEven(numbers, value) {
//     // Пиши код ниже этой строки
//     for (let i = 0; i < numbers.length; i += 1) {
//       if (numbers[i] % 2 === 0) {
//         numbers[i] = numbers[i] + value;
//       }
//     }
//     // Пиши код выше этой строки
//   console.log(numbers);
//   }
// /КЛАССИЧЕСКИЙ МЕТОД for//

// МЕТОД forEach//
// const changeEven = (numbers, value) => {
//     // Пиши код ниже этой строки
//   const newNumber = [];
    
//   numbers.forEach((number, index) => {    
//    newNumber.push(number);
//     if (number % 2 === 0) {
//       newNumber.splice(index, 1, number += value);
//     }
//   });
//     // Пиши код выше этой строки
//   console.log(newNumber);
//   return newNumber;
//   }
// // МЕТОД forEach//
// changeEven([1, 2, 3, 4, 5], 10) // [1, 12, 3, 14, 5].
// changeEven([2, 8, 3, 7, 4, 6], 10) // [12, 18, 3, 7, 14, 16].
// changeEven([17, 24, 68, 31, 42], 100) // [17, 124, 168, 31, 142].
// changeEven([44, 13, 81, 92, 36, 54], 100) // [144, 13, 81, 192, 136, 154].



// МЕТОД MAP ПРИМЕР//
// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];

// const planetsInUpperCase = planets.map((planet) => planet.toUpperCase());
// console.log(planetsInUpperCase); // ['ЗЕМЛЯ', 'МАРС', 'ВЕНЕРА', 'ЮПИТЕР']

// const planetsInLowerCase = planets.map((planet) => planet.toLowerCase());
// console.log(planetsInLowerCase); // ['земля', 'марс', 'венера', 'юпитер']

// // Оригинальный массив не изменился
// console.log(planets); // ['Земля', 'Марс', 'Венера', 'Юпитер']
// /МЕТОД MAP ПРИМЕР//

// МОДУЛЬ 6 ЗАДАЧА №10

// const planets = ['Земля', 'Марс', 'Венера', 'Юпитер'];
// // Пиши код ниже этой строки
// let planetsLengths = planets.map((planet) => planet.length);

// console.log(planetsLengths);

// planetsLengths = [5, 4, 6, 6];// result


// МЕТОД MAP ПРИМЕР ПЕРЕБОРА МАССИВА ОБЪЕКТОВ//

// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 }
// ];

// const names = students.map(student => student.name);
// console.log(names); // ['Манго', 'Поли', 'Аякс', 'Киви', 'Хьюстон']

// /МЕТОД MAP ПРИМЕР ПЕРЕБОРА МАССИВА ОБЪЕКТОВ//

// МОДУЛЬ 6 ЗАДАЧА №11

// const books = [
//     { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//     { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//     { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//     { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//     { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
//   ];
//   // Пиши код ниже этой строки
  
// const titles = books.map(book => book.title);
//   console.log(titles);


//Метод flatMap()//

// МЕТОД FlatMap ПРИМЕР ПЕРЕБОРА МАССИВА ОБЪЕКТОВ//
// const students = [
//   { name: 'Манго', courses: ['математика', 'физика'] },
//   { name: 'Поли', courses: ['информатика', 'математика'] },
//   { name: 'Киви', courses: ['физика', 'биология'] },
// ];

//  students.map((student) => student.courses);
// // [['математика', 'физика'], ['информатика', 'математика'], ['физика', 'биология']]

// students.flatMap((student) => student.courses);

// ['математика', 'физика', 'информатика', 'математика', 'физика', 'биология'];
// МЕТОД FlatMap ПРИМЕР ПЕРЕБОРА МАССИВА ОБЪЕКТОВ//

// МОДУЛЬ 6 ЗАДАЧА №12

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика']
//     }
//   ];
//   // Пиши код ниже этой строки
  
// const genres = books.flatMap((book) => book.genres);
//   console.log(genres);

// МОДУЛЬ 6 ЗАДАЧА №13

// Пиши код ниже этой строки
// const getUserNames = users => {
//   const names = users.map(user => user.name);  
  
// return names;
// };
  // Пиши код выше этой строки

  // МОДУЛЬ 6 ЗАДАЧА №14

  // Пиши код ниже этой строки
// const getUserEmails = users => {
// const emails = users.map((user) => user.email);
//   return emails;

//   };
  // Пиши код выше этой строки

//Методы filter и find//

// МЕТОД filter ПРИМЕР//
// const values = [51, -3, 27, 21, -68, 42, -37];

// const positiveValues = values.filter(value => value >= 0);
// console.log(positiveValues); // [51, 27, 21, 42]

// const negativeValues = values.filter(value => value < 0);
// console.log(negativeValues); // [-3, -68, -37]

// const bigValues = values.filter(value => value > 1000);
// console.log(bigValues); // []

// // Оригинальный массив не изменился
// console.log(values); // [51, -3, 27, 21, -68, 42, -37]
// /МЕТОД filter и find ПРИМЕР//

  // МОДУЛЬ 6 ЗАДАЧА №15

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Пиши код ниже этой строки

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log(evenNumbers);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);
// console.log(oddNumbers);


// evenNumbers = [24, 82, 36, 18, 52]; result
// oddNumbers = [17, 61, 47, 73]; result

// МОДУЛЬ 6 ЗАДАЧА №16

// const books = [
//     {
//       title: 'Последнее королевство',
//       author: 'Бернард Корнуэлл',
//       genres: ['приключения', 'историческое']
//     },
//     {
//       title: 'На берегу спокойных вод',
//       author: 'Роберт Шекли',
//       genres: ['фантастика', 'мистика']
//     },
//     {
//       title: 'Красна как кровь',
//       author: 'Ли Танит',
//       genres: ['ужасы', 'мистика', 'приключения']
//     }
//   ];
//   // Пиши код ниже этой строки
// const allGenres = books.flatMap((book) => book.genres);
//   console.log(allGenres);
//   const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index
// );
// console.log(uniqueGenres);


// МЕТОД filter ПЕРЕБОР МАССИВА ОБЪЕКТОВ ПРИМЕР //
// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Массив объектов с именами Манго и Киви

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Массив с одним объектом Аякс

// // В коллбек-функции удобно деструктуризировать свойства объекта
// const average = students.filter(
//   ({ score }) => score >= LOW_SCORE && score < HIGH_SCORE
// );
// console.log(average); // Массив объектов с именами Поли и Хьюстон
// // /МЕТОД filter ПЕРЕБОР МАССИВА ОБЪЕКТОВ ПРИМЕР //


// МОДУЛЬ 6 ЗАДАЧА №17

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];

// const MIN_RATING = 8;
// const AUTHOR = 'Бернард Корнуэлл';
// // Пиши код ниже этой строки

// const topRatedBooks = books.filter((book) => book.rating >= MIN_RATING);
// console.log(topRatedBooks);
// const booksByAuthor = books.filter((book) => book.author === AUTHOR);
// console.log(booksByAuthor);

// МОДУЛЬ 6 ЗАДАЧА №18

// Пиши код ниже этой строки
// const getUsersWithEyeColor = (users, color) => {
//  const eyes = users.filter((user) => user.eyeColor === color);
//   return eyes; 
// };
// Пиши код выше этой строки

// МОДУЛЬ 6 ЗАДАЧА №19

// Пиши код ниже этой строки
// const getUsersWithAge = (users, minAge, maxAge) => {
//  const personAge = users.filter((user) => user.age >=minAge && user.age<=maxAge);
//   return personAge;
// };
// Пиши код выше этой строки

// МОДУЛЬ 6 ЗАДАЧА №20

// Пиши код ниже этой строки
// const getUsersWithFriend = (users, friendName) => {
//   const userFriend = users.filter((user) => user.friends.includes(friendName));
//   return userFriend;
// };
// Пиши код выше этой строки

// МОДУЛЬ 6 ЗАДАЧА №21

// Пиши код ниже этой строки
// const getFriends = (users) => {
  
//   const allFriends = users.flatMap((user) => user.friends);
//  const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index
// ); 
//    return uniqueFriends;
// };
// Пиши код выше этой строки

// МОДУЛЬ 6 ЗАДАЧА №22

// Пиши код ниже этой строки
// const getActiveUsers = (users) => {
//    const activeUsers = users.filter((user) => user.isActive === true);
//   return activeUsers;
// };
// Пиши код выше этой строки

// МОДУЛЬ 6 ЗАДАЧА №23

// Пиши код ниже этой строки
// const getInactiveUsers = (users) => {
//   const unactiveUsers = users.filter((user) => user.isActive !== true);
// return unactiveUsers; 
// };
// Пиши код выше этой строки


// МЕТОД find ПРИМЕР//
// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];
// colorPickerOptions.find((option) => option.label === 'blue'); // { label: 'blue', color: '#2196F3' }
// colorPickerOptions.find((option) => option.label === 'pink'); // { label: 'pink', color: '#E91E63' }
// colorPickerOptions.find((option) => option.label === 'white'); // undefined
// /МЕТОД find ПРИМЕР//

// МОДУЛЬ 6 ЗАДАЧА №24

const books = [
  { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
  { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
  { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
  { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
];
const BOOK_TITLE = 'Сон смешного человека';
const AUTHOR = 'Роберт Шекли';
// Пиши код ниже этой строки

const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
console.log(bookWithTitle);
const bookByAuthor = books.find((book) => book.author === AUTHOR);
console.log(bookByAuthor);


