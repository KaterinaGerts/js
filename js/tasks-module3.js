 console.log(123);

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

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];
console.log(products);

function getProductPrice(productName) {
  // Пиши код ниже этой строки 
  for (let product of productName) {   
    if (product === products) {
      return productName;
      // console.log(productName);
    }
    return null;
    console.log(null);
  }  
  // Пиши код выше этой строки
}
