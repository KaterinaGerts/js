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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//


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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

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

  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

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

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

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

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
// ];
// const BOOK_TITLE = 'Сон смешного человека';
// const AUTHOR = 'Роберт Шекли';
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);
// console.log(bookByAuthor);

// МОДУЛЬ 6 ЗАДАЧА №25
// Пиши код ниже этой строки
// const getUserWithEmail = (users, email) => {
//  const mail = users.find((user) => user.email === email);
//   return mail;
// };

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Метод every()//

// МЕТОД every ПРИМЕР//
// Все элементы больше либо равны нулю? - да
// [1, 2, 3, 4, 5].every((value) => value >= 0); // true

// // Все элементы больше либо равны нулю? - нет
// [1, 2, 3, -10, 4, 5].every((value) => value >= 0); // false
// /МЕТОД every ПРИМЕР//

// МОДУЛЬ 6 ЗАДАЧА №26

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const eachElementInFirstIsEven = firstArray.every((elem) => elem % 2 === 0);
// console.log(eachElementInFirstIsEven);
// const eachElementInFirstIsOdd = firstArray.every((elem) => elem % 2 !== 0);
// console.log(eachElementInFirstIsOdd);

// const eachElementInSecondIsEven = secondArray.every((elem) => elem % 2 === 0);
// console.log(eachElementInSecondIsEven);
// const eachElementInSecondIsOdd = secondArray.every((elem) => elem % 2 !== 0);
// console.log(eachElementInSecondIsOdd);

// const eachElementInThirdIsEven = thirdArray.every((elem) => elem % 2 === 0);
// console.log(eachElementInThirdIsEven);
// const eachElementInThirdIsOdd = thirdArray.every((elem) => elem % 2 !== 0);
// console.log(eachElementInThirdIsOdd);

// МОДУЛЬ 6 ЗАДАЧА №27

// // Пиши код ниже этой строки
// const isEveryUserActive = (users) => {
//   const activeUser = users.every((user) => user.isActive === true);
//   return activeUser;
// };
// // Пиши код выше этой строки

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Метод some()//

// МЕТОД some ПРИМЕР//
// Есть хотя бы один элемент больше либо равный нулю? - да
// [1, 2, 3, 4, 5].some(value => value >= 0); // true

// // Есть хотя бы один элемент больше либо равный нулю? - да
// [-7, -20, 3, -10, -14].some(value => value >= 0); // true

// // Есть хотя бы один элемент меньше нуля? - нет
// [1, 2, 3, 4, 5].some(value => value < 0); // false

// // Есть хотя бы один элемент меньше нуля? - да
// [1, 2, 3, -10, 4, 5].some(value => value < 0); // true
// // /МЕТОД some ПРИМЕР//

// МОДУЛЬ 6 ЗАДАЧА №28

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Пиши код ниже этой строки

// const anyElementInFirstIsEven = firstArray.some((elem) => elem % 2 === 0);
// console.log(anyElementInFirstIsEven);
// const anyElementInFirstIsOdd = firstArray.some((elem) => elem % 2 !== 0);
// console.log(anyElementInFirstIsOdd);

// const anyElementInSecondIsEven = secondArray.some((elem) => elem % 2 === 0);
// console.log(anyElementInSecondIsEven);
// const anyElementInSecondIsOdd = secondArray.some((elem) => elem % 2 !== 0);
// console.log(anyElementInSecondIsOdd);

// const anyElementInThirdIsEven = thirdArray.some((elem) => elem % 2 === 0);
// console.log(anyElementInThirdIsEven);
// const anyElementInThirdIsOdd = thirdArray.some((elem) => elem % 2 !== 0);
// console.log(anyElementInThirdIsOdd);

// МОДУЛЬ 6 ЗАДАЧА №29

// Пиши код ниже этой строки
// const isAnyUserActive = users => {
//   const activeUsers = users.some((user) => user.isActive === true);
//   return activeUsers;   
// };
// Пиши код выше этой строки

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Метод reduce()//

// МЕТОД reduce ПРИМЕР//
// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 0);

// console.log(total); // 32

// Разъяснение примера!!!///
// # Вначале метод reduce() создаёт внутреннюю переменную-аккумулятор и
// # присваивает ей значение параметра initialValue или первого элемента
// # перебираемого массива, если initialValue не задан.
// previousValue = 0

// # Далее коллбек-функция вызывается для каждого элемента массива. Текущее значение
// # параметра previousValue это то, что вернула коллбек-функция на прошлой итерации.
// Итерация 1 -> previousValue = 0 -> number = 2 -> return 0 + 2 -> return 2
// Итерация 2 -> previousValue = 2 -> number = 7 -> return 2 + 7 -> return 9
// Итерация 3 -> previousValue = 9 -> number = 3 -> return 9 + 3 -> return 12
// Итерация 4 -> previousValue = 12 -> number = 14 -> return 12 + 14 -> return 26
// Итерация 5 -> previousValue = 26 -> number = 6 -> return 26 + 6 -> return 32

// # После того как весь массив перебран, метод reduce() возвращает значение аккумулятора.
// Результат - 32
// /МЕТОД reduce ПРИМЕР//

// МОДУЛЬ 6 ЗАДАЧА №30

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Пиши код ниже этой строки

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
// });
// console.log(totalPlayTime);

// // Пиши код выше этой строки
// const averagePlayTime = totalPlayTime / playtimes.length;

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Метод reduce и мссив объектов!!!//
// МЕТОД reduce и мссив объектов ПРИМЕР//
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
//   { name: 'Хьюстон', score: 64 },
// ];

// // Название аккумулятора может быть произвольным, это просто параметр функции
// const totalScore = students.reduce((total, student) => {
//   return total + student.score;
// }, 0);
// console.log(totalScore);
// const averageScore = totalScore / students.length;
// /МЕТОД reduce и мссив объектов ПРИМЕР//

// МОДУЛЬ 6 ЗАДАЧА №31

// const players = [
//   { name: 'Манго', playtime: 1270, gamesPlayed: 4 },
//   { name: 'Поли', playtime: 469, gamesPlayed: 2 },
//   { name: 'Аякс', playtime: 690, gamesPlayed: 3 },
//   { name: 'Киви', playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((middleTime, player) => {
//   return middleTime + player.playtime / player.gamesPlayed; 
// }, 0);
// console.log(totalAveragePlaytimePerGame);
// //console.log(totalAveragePlaytimePerGame);

// МОДУЛЬ 6 ЗАДАЧА №32

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]
//мой код, который решает в ВСкоде

// // Пиши код ниже этой строки
// const calculateTotalBalance = users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);   

// console.log(calculateTotalBalance);
// // Пиши код выше этой строки
///мой код, который решает в ВСкоде//

//========//

//Код для бота
// Пиши код ниже этой строки
// const calculateTotalBalance = (users) => 
//    users.reduce((total, user) => {
//     return total + user.balance;
//   }, 0);   
// console.log(calculateTotalBalance);
// Пиши код выше этой строки
//Код для бота//

// МОДУЛЬ 6 ЗАДАЧА №33
// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

//мой код, который решает в ВСкоде
// Пиши код ниже этой строки

// const getTotalFriendCount = users.flatMap(friend => friend.friends).reduce((total, friend) => {
//   return total += 1;
// }, 0);
// console.log(getTotalFriendCount);
// Пиши код выше этой строки
//мой код, который решает в ВСкоде

//========//

//Код для бота
// Пиши код ниже этой строки
// const getTotalFriendCount = (users) => users.flatMap(friend => friend.friends).reduce((total, friend) => {
//   return total += 1;
// }, 0);
// Пиши код выше этой строки
//Код для бота//

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Метод sort()//

//=========//
// МЕТОД sort ПРИМЕР//

// Массив чисел будет отсортирован по возврастанию
// const scores = [61, 19, 74, 35, 92, 56];
// scores.sort();
// console.log(scores); // [19, 35, 56, 61, 74, 92]

// // Массив строк сортируется по алфавиту
// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];
// students.sort();
// console.log(students); // [ 'Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля' ]

// // При этом порядковый номер заглавных букв меньше чем у прописных
// const letters = ['b', 'B', 'a', 'A', 'c', 'C'];
// letters.sort();
// console.log(letters); // ['A', 'B', 'C', 'a', 'b', 'c']

// Из - за того, что сортируется исходный массив,
//   нарушается принцип чистоты функций и нельзя удобно сделать
// несколько производных коллекций на базе исходной.
//   Например, сделать коллекцию отсортированную по возрастанию,
//   а другую по убыванию.Поэтому перед сортировкой делают полную
// копию исходного массива и сортируют уже её.

// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort();

// console.log(scores); // [61, 19, 74, 35, 92, 56]
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//=========//

// МОДУЛЬ 6 ЗАДАЧА №34

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   'Ли Танит',
//   'Бернард Корнуэлл',
//   'Роберт Шекли',
//   'Федор Достоевский'
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();

// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);  // [1967, 1973, 1984, 1997, 2008, 2012, 2016].
// console.log(alphabeticalAuthors);  // ['Бернард Корнуэлл', 'Ли Танит', 'Роберт Шекли', 'Федор Достоевский'].

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Метод sort(), Свой порядок сортировки чисел//

// массив.sort((firstEl, secondEl) => {
//   // Тело коллбек-функции
// });
// firstEl - первый элемент для сравнения.
// secondEl - второй элемент для сравнения.

//=========//

// МЕТОД sort ПРИМЕР//
//сортировка по возрастанию//
// const scores = [61, 19, 74, 35, 92, 56];
// const ascendingScores = [...scores].sort((a, b) => a - b);
// console.log(ascendingScores); // [19, 35, 56, 61, 74, 92]

//сортировка по убыванию//
// const scores = [61, 19, 74, 35, 92, 56];
// const descendingScores = [...scores].sort((a, b) => b - a);
// console.log(descendingScores); // [92, 74, 61, 56, 35, 19]

//=========//

// МОДУЛЬ 6 ЗАДАЧА №35

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort((a,b) => a-b);
// console.log(ascendingReleaseDates);
// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);
// console.log(descendingReleaseDates);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Метод sort(), Свой порядок сортировки строк//

//Для сортировки строк в алфавитном порядке, 
//по возрастанию или убыванию, используется метод строк localeCompare().

//=========//

// МЕТОД sort ПРИМЕР//
// const students = ['Вика', 'Андрей', 'Олег', 'Юля', 'Борис', 'Катя'];

// const inAlphabetOrder = [...students].sort((a, b) => a.localeCompare(b));
// console.log(inAlphabetOrder); // ['Андрей', 'Борис', 'Вика', 'Катя', 'Олег', 'Юля']

// const inReversedOrder = [...students].sort((a, b) => b.localeCompare(a));
// console.log(inReversedOrder); // ['Юля', 'Олег', 'Катя', 'Вика', 'Борис', 'Андрей']

//=========//

// МОДУЛЬ 6 ЗАДАЧА №36

// const authors = [
//     'Ли Танит',
//     'Бернард Корнуэлл',
//     'Роберт Шекли',
//     'Федор Достоевский',
//     'Говард Лавкрафт'
//   ];
//   // Пиши код ниже этой строки
  
//   const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));
//   console.log(authorsInAlphabetOrder);
//   const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
//   console.log(authorsInReversedOrder);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Сортировка объектов//

//=========//

// ПРИМЕР//
// const students = [
//   { name: 'Манго', score: 83 },
//   { name: 'Поли', score: 59 },
//   { name: 'Аякс', score: 37 },
//   { name: 'Киви', score: 94 },
// ];

// const inAscendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => firstStudent.score - secondStudent.score
// );
// console.log(inAscendingScoreOrder);

// const inDescendingScoreOrder = students.sort(
//   (firstStudent, secondStudent) => secondStudent.score - firstStudent.score
// );
// console.log(inDescendingScoreOrder);

// const inAlphabeticalOrder = students.sort((firstStudent, secondStudent) =>
//   firstStudent.name.localeCompare(secondStudent.name)
// );
// console.log(inAlphabeticalOrder);
//=========//

// МОДУЛЬ 6 ЗАДАЧА №37

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 7.94 },
//   { title: 'Враг Божий', author: 'Бернард Корнуэлл', rating: 8.67 }
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) => firstBook.author.localeCompare(secondBook.author));
// //console.log(sortedByAuthorName);
// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) => secondBook.author.localeCompare(firstBook.author));
// //console.log(sortedByReversedAuthorName);
// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) => firstBook.rating - secondBook.rating);
// //console.log(sortedByAscendingRating);
// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) => secondBook.rating - firstBook.rating);
// console.log(sortedByDescentingRating);

// // МОДУЛЬ 6 ЗАДАЧА №38

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

//мой код, который решает в ВСкоде
// Пиши код ниже этой строки
// const sortByAscendingBalance = [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// console.log(sortByAscendingBalance);

// Пиши код выше этой строки

//========//

//Код для бота
// Пиши код ниже этой строки
//const sortByAscendingBalance = (users) => [...users].sort((firstUser, secondUser) => firstUser.balance - secondUser.balance);
// Пиши код выше этой строки

// МОДУЛЬ 6 ЗАДАЧА №39

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

//мой код, который решает в ВСкоде

// Пиши код ниже этой строки
// const sortByDescendingFriendCount = [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
// console.log(sortByDescendingFriendCount);
// Пиши код выше этой строки

//========//

//Код для бота

// Пиши код ниже этой строки
//const sortByDescendingFriendCount = (users) => [...users].sort((firstUser, secondUser) => secondUser.friends.length - firstUser.friends.length);
// Пиши код выше этой строки

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

//мой код, который решает в ВСкоде

// Пиши код ниже этой строки
// const sortByName = [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
// console.log(sortByName);
// Пиши код выше этой строки

//========//

//Код для бота

// Пиши код ниже этой строки
//const sortByName = (users) => [...users].sort((firstUser, secondUser) => firstUser.name.localeCompare(secondUser.name));
// Пиши код выше этой строки

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

//Цепочки методов (чейнинг, chaining)//

// ПРИМЕР//

// const students = [
//   { name: 'Манго', score: 83, courses: ['математика', 'физика'] },
//   { name: 'Поли', score: 59, courses: ['информатика', 'математика'] },
//   { name: 'Аякс', score: 37, courses: ['физика', 'биология'] },
//   { name: 'Киви', score: 94, courses: ['литература', 'информатика'] },
// ];
 // Правильный вариант с лишними переменными//
// const sortedByAscendingScore = [...students].sort((a, b) => a.score - b.score);
// const names = sortedByAscendingScore.map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

// Тоже самое, только с чейнингом//

// const names = [...students]
//   .sort((a, b) => a.score - b.score)
//   .map((student) => student.name);

// console.log(names); // ['Аякс', 'Поли', 'Манго', 'Киви']

//=========//
// const uniqueSortedCourses = students
//   .flatMap((student) => student.courses)
//   .filter((course, index, array) => array.indexOf(course) === index)
//   .sort((a, b) => a.localeCompare(b));

// console.log(uniqueSortedCourses); // ['биология', 'информатика', 'литература', 'математика', 'физика']

//=========//

// МОДУЛЬ 6 ЗАДАЧА №41

// const books = [
//   { title: 'Последнее королевство', author: 'Бернард Корнуэлл', rating: 8.38 },
//   { title: 'На берегу спокойных вод', author: 'Роберт Шекли', rating: 8.51 },
//   { title: 'Сон смешного человека', author: 'Федор Достоевский', rating: 7.75 },
//   { title: 'Красна как кровь', author: 'Ли Танит', rating: 8.14 },
//   { title: 'Сны В Ведьмином Доме', author: 'Говард Лавкрафт', rating: 8.67 }
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
// .filter(elem => elem.rating > MIN_BOOK_RATING)
// .map((book) => book.author)
// .sort((firstBook, secondBook) => firstBook.localeCompare(secondBook));
//  console.log(names);

// МОДУЛЬ 6 ЗАДАЧА №42

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Пиши код ниже этой строки
// const getNamesSortedByFriendCount = [...users]
//   .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//   .map((user) => user.name);
// // Пиши код выше этой строки

// console.log(getNamesSortedByFriendCount);

// //['Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Sheree Anthony', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson'] Result


// МОДУЛЬ 6 ЗАДАЧА №43

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Пиши код ниже этой строки
// const getSortedFriends = [...users]
// .flatMap((user) => user.friends)
// .filter((friend, index, array) => array.indexOf(friend) === index)
// .sort((firstrFriend, secondFriend) => firstrFriend.localeCompare(secondFriend));
// // Пиши код выше этой строки
// console.log(getSortedFriends);

//['Adrian Cross', 'Aisha Tran', 'Briana Decker', 'Eddie Strong', 'Goldie Gentry', 'Jacklyn Lucas', 'Jordan Sampson', 'Linda Chapman', 'Marilyn Mcintosh', 'Naomi Buckner', 'Padilla Garrison', 'Sharron Pace', 'Solomon Fokes']. Result

// МОДУЛЬ 6 ЗАДАЧА №44

// const users = [
//   {
//     name: 'Moore Hensley',
//     email: 'moorehensley@indexia.com',
//     eyeColor: 'blue',
//     friends: ['Sharron Pace'],
//     isActive: false,
//     balance: 2811,
//     gender: 'male'
//   },
//   {
//     name: 'Sharlene Bush',
//     email: 'sharlenebush@tubesys.com',
//     eyeColor: 'blue',
//     friends: ['Briana Decker', 'Sharron Pace'],
//     isActive: true,
//     balance: 3821,
//     gender: 'female'
//   },
//   {
//     name: 'Ross Vazquez',
//     email: 'rossvazquez@xinware.com',
//     eyeColor: 'green',
//     friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//     isActive: false,
//     balance: 3793,
//     gender: 'male'
//   },
//   {
//     name: 'Elma Head',
//     email: 'elmahead@omatom.com',
//     eyeColor: 'green',
//     friends: ['Goldie Gentry', 'Aisha Tran'],
//     isActive: true,
//     balance: 2278,
//     gender: 'female'
//   },
//   {
//     name: 'Carey Barr',
//     email: 'careybarr@nurali.com',
//     eyeColor: 'blue',
//     friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//     isActive: true,
//     balance: 3951,
//     gender: 'male'
//   },
//   {
//     name: 'Blackburn Dotson',
//     email: 'blackburndotson@furnigeer.com',
//     eyeColor: 'brown',
//     friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//     isActive: false,
//     balance: 1498,
//     gender: 'male'
//   },
//   {
//     name: 'Sheree Anthony',
//     email: 'shereeanthony@kog.com',
//     eyeColor: 'brown',
//     friends: ['Goldie Gentry', 'Briana Decker'],
//     isActive: true,
//     balance: 2764,
//     gender: 'female'
//   }
// ]

// // Пиши код ниже этой строки
// const getTotalBalanceByGender = (users, gender) =>
//   [...users]
//     .filter((user) => user.gender === gender)
//     .reduce((total, user) => {
//      return total + user.balance;
//    }, 0);    
  
// // Пиши код выше этой строки
// console.log(getTotalBalanceByGender);

// 'male', === 12053.
// 'female', === 8863.
