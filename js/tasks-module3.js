//  console.log(123);

// //МОДУЛЬ 3, ЗАДАЧА №7

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Просторная квартира в центре',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Генри Сибола',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com'
//   }  
// };
// console.log(apartment);

// // Пиши код ниже этой строки

//  apartment.area = 60;
// console.log(apartment.area);
 
// apartment.rooms = 3;
// console.log(apartment.rooms);
  
// apartment.location = {
//   country:'Ямайка',
//   city: 'Кингстон',
// };

// console.log(apartment.location);


//МОДУЛЬ 3, ЗАДАЧА №10

// const apartment = {
//   descr: 'Просторная квартира в центре',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Пиши код ниже этой строки

// for(let key in apartment) {
// keys.push(key);
// values.push(apartment[key]); 
// }
// console.log(keys);
// console.log(values);

//МОДУЛЬ 3, ЗАДАЧА №12

//  function countProps(object) {  
//    let propCount = 0;
//    // Пиши код ниже этой строки
  
//    for (let key in object) {
//    if (object.hasOwnProperty(key)){
//      propCount += 1;    
//      }
//     };
//     console.log(propCount);
// // // Пиши код выше этой строки
//  return propCount;
//  }


// countProps({}) // 0. 
// countProps({ name: 'Mango', age: 2 }) // 2. 
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) // 3.


//МОДУЛЬ 3, ЗАДАЧА №13

//  const apartment = {
//    descr: 'Просторная квартира в центре',
//    rating: 4,
//    price: 2153,
//  };
//  const values = [];
//  // Пиши код ниже этой строки
// const keys = Object.keys(apartment);
// for (let key of keys) {
//   console.log(key);
//   values.push(apartment[key])
//   console.log(apartment[key]);
// }




//  keys['descr', 'rating', 'price'];
//  values['Просторная квартира в центре', 4, 2153];

//МОДУЛЬ 3, ЗАДАЧА №14

//   function countProps(object) {  
//     let propCount = 0;
//     // Пиши код ниже этой строки

//     const keys = Object.keys(object);
//     for (let key of keys) {
//       propCount += 1;
//     }  
//     console.log(propCount);
//   // Пиши код выше этой строки
//   return propCount;
//   }


//  countProps({}) // 0. 
//  countProps({ name: 'Mango', age: 2 }) // 2. 
// countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }) // 3.
 

//МОДУЛЬ 3, ЗАДАЧА №16

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   const keys = Object.values(salaries);  
//   for (let key of keys) {
//     totalSalary += key;
//   }
//   console.log(totalSalary);

//   // Пиши код выше этой строки
//   return totalSalary;
// }

//  countTotalSalary({}) // 0.
//  countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) // 330.
//  countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) // 400.


//МОДУЛЬ 3, ЗАДАЧА №18

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// console.log(products);

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки  
  
//   for (let product of products) {
//     if (product.name === productName) {
//       return product.price;
//       console.log(product.price);
//     }    
//   };
//   return null;
// }

//   getProductPrice('Радар') // 1300.
//   getProductPrice('Захват') // 1200.
//   getProductPrice('Сканер') // 2700.
//   getProductPrice('Дроид') // 400.
//   getProductPrice('Двигатель') // null.

//МОДУЛЬ 3, ЗАДАЧА №19

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки

//   const newPropName = [];  
  
//   for (let product of products) {
//     const keys = Object.keys(product);
//     // console.log(keys);
    
//      for (let key of keys) {
//        if (key === propName) {
//          newPropName.push(product[key]);
//        }
//      }
//   };
//   console.log(newPropName);
//   return newPropName;
  
//   // Пиши код ниже этой строки
// }

// getAllPropValues('name') // ['Радар', 'Сканер', 'Дроид', 'Захват'].
// getAllPropValues('quantity') // [4, 3, 7, 9].
// getAllPropValues('price') // [1300, 2700, 400, 1200].
// getAllPropValues('category') // [].

//МОДУЛЬ 3, ЗАДАЧА №20

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];
// console.table(products);

// function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки

  //ВАРИАНТ АЛЕНЫ

// let totalPrice = 0;
//   for (const product of products) {
//     if (productName === product.name)
//       totalPrice = product.price * product.quantity;
//     console.log(totalPrice);
//   }
//   return totalPrice;


//  // МОЙ ВАРИАНТ
// const products = [
// 	  { name: 'Радар', price: 1300, quantity: 4 },
// 	  { name: 'Сканер', price: 2700, quantity: 3 },
// 	  { name: 'Дроид', price: 400, quantity: 7 },
// 	  { name: 'Захват', price: 1200, quantity: 9 },
// 	];
// function calculateTotalPrice(productName) {
// 	// Пиши код ниже этой строки
//   let totalPrice = 0; 
// 	for (let product of products) {
// 	   //console.log(product);    
// 	  const total = Object.values(product);
// 	  // console.log(total);
// 	  for (let elem of total) {
// 		 //console.log(elem);
// 		if (elem === productName) {
// 		  totalPrice =  product.price * product.quantity;
// 		} 
// 	  }    
// 	};
//   return totalPrice;  
// 	// Пиши код выше этой строки
//   }
//  console.log(calculateTotalPrice('Бластер')) // 0.
//  console.log(calculateTotalPrice('Радар')) // 5200.
//  console.log(calculateTotalPrice('Дроид')) // 2800.
//  console.log(calculateTotalPrice('Захват')) // 10800.
//  console.log(calculateTotalPrice('Сканер')) // 8100

//МОДУЛЬ 3, ЗАДАЧА №24

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const {hex, rgb} of colors) {
  
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

//МОДУЛЬ 3, ЗАДАЧА №25

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: 'https://www.flaticon.com/svg/static/icons/svg/861/861059.svg',
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };
// // Пиши код ниже этой строки
// const {
// today: {low:lowToday, high:highToday, icon:todayIcon= 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'},
// tomorrow: {low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon = 'https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg'}, 
// } = forecast;
// console.log(forecast);

//МОДУЛЬ 3, ЗАДАЧА №26

// function calculateMeanTemperature(forecast) {
//   const {
//     today:{low:todayLow, high:todayHigh},
//     tomorrow:{low:tomorrowLow, high:tomorrowHigh},  
//   } = forecast
  
//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
 
// }

//  calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) // 28.5.
//  calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) // 37.


//МОДУЛЬ 3, ЗАДАЧА №27

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

//МОДУЛЬ 3, ЗАДАЧА №28

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

//МОДУЛЬ 3, ЗАДАЧА №30

// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
//   const priority = 'Обычный';
//   // Пиши код ниже этой строки
// const newData = {category, priority, ...data, completed};
//   return newData;
//   // Пиши код выше этой строки
// }

//МОДУЛЬ 3, ЗАДАЧА №31

// // Пиши код ниже этой строки
// function add(...args) {
//   // console.log(args);
  
//   let sum = 0;
//   for (let arg of args) {
//     // console.log(arg);
//     sum += arg;
//   }
//   console.log(sum);
//    return sum;
//   // Пиши код выше этой строки
// }
//  add(15, 27) // 42
//  add(12, 4, 11, 48) // 75
//  add(32, 6, 13, 19, 8) // 78
//  add(74, 11, 62, 46, 12, 36) // 241


//МОДУЛЬ 3, ЗАДАЧА №32

// Пиши код ниже этой строки
// function addOverNum(firstNumber, ...args) {
   
//   let total = 0;

//   for (const arg of args) {    
//      if (arg > firstNumber) {
//        total += arg;    
//       }       
//     }
//     console.log(total);
//   return total;
//   // Пиши код выше этой строки
// }
//  addOverNum(50, 15, 27) // 0.
//  addOverNum(10, 12, 4, 11, 48, 10, 8) // 71.
//  addOverNum(15, 32, 6, 13, 19, 8) // 51.
//  addOverNum(20, 74, 11, 62, 46, 12, 36) // 218.


//МОДУЛЬ 3, ЗАДАЧА №33

// // Пиши код ниже этой строки
//   function findMatches([...args], ...propArgs) {
//   const matches = []; // Не изменяй эту строку

//      for (let elem of propArgs) {
//       // console.log(arg);
//       for (let arg of args) {
//         // console.log(elem);
//         if (elem === arg) {
//           matches.push(elem);
//         }
//       }
//     }  
//    // Пиши код выше этой строки
//     console.log(matches);
//   return matches;
// }

//  findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) // [1, 2].
//  findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) // [17, 89, 2].
//  findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) // [24, 9, 41].
//  findMatches([63, 11, 8, 29], 4, 7, 16) // [].
 
//МОДУЛЬ 3, ЗАДАЧА №34

// const bookShelf = {
//   // Пиши код ниже этой строки
//   books: ['Последнее королевство', 'Страж снов', 'Пески Дюны'],
//   getBooks() {
//     return 'Возвращаем все книги';
//   },
//   addBook(bookName) {
//     return `Добавляем книгу ${bookName}`;
//   },
//   removeBook(bookName) {
//   	return `Удаляем книгу ${bookName}`;
//   },
//   updateBook(oldName, newName) {   
//       return `Обновляем книгу ${oldName} на ${newName}`;      
//   },
//   // Пиши код выше этой строки
// };
// console.log(bookShelf);

// bookShelf.updateBook('Пески Дюны', 'Дюна') // 'Обновляем книгу Пески Дюны на Дюна'.

//МОДУЛЬ 3, ЗАДАЧА №35

// const bookShelf = {
//   books: ['Последнее королевство', 'Мгла', 'Страж снов'],
//   updateBook(oldName, newName) {
//     // Пиши код ниже этой строки	
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1, newName);
//   },
	
//   // Пиши код выше этой строки
// };


//МОДУЛЬ 3, ЗАДАЧА №36

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions:[],
//   // Пиши код выше этой строки
// };

//МОДУЛЬ 3, ЗАДАЧА №37

// const atTheOldToad = {
//   // Пиши код ниже этой строки
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   getPotions() {
//   return this.potions;
//   },
//   // Пиши код выше этой строки
// };

//МОДУЛЬ 3, ЗАДАЧА №38

// const atTheOldToad = {
//   potions: ['Зелье скорости', 'Дыхание дракона', 'Каменная кожа'],
//   addPotion(potionName) {
//     // Пиши код ниже этой строки
//     this.potions.push(potionName);
//     // Пиши код выше этой строки
//   },
// };
