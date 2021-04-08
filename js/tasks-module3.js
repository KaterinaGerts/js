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


//МОДУЛЬ 3, ЗАДАЧА №12

 const apartment = {
   descr: 'Просторная квартира в центре',
   rating: 4,
   price: 2153,
 };
 const values = [];
 // Пиши код ниже этой строки
const keys = Object.keys(apartment);
for (let key of keys) {
  console.log([key]);
  console.log(apartment[key]);
}



 keys['descr', 'rating', 'price'];
 values['Просторная квартира в центре', 4, 2153];