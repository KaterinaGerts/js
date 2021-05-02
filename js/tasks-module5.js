// МОДУЛЬ 5, ЗАДАЧА №1

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const child = Object.create(parent);
// console.log(child);

// // Пиши код выше этой строки
// child.name = 'Jason';
// child.age = 27;

// parent.hasOwnProperty('surname') // true.
// parent.hasOwnProperty('heritage') // true.


// console.log(child.hasOwnProperty('name'));  // true.
// console.log(child.name);  // 'Jason'.
// console.log(child.hasOwnProperty('age'));  // true.
// console.log(child.age);  // 27.
// console.log(child.hasOwnProperty('surname'));  // false.
// console.log(child.surname);  // 'Moore'.
// console.log(child.hasOwnProperty('heritage'));   // false.
// console.log(child.heritage);  // 'Irish'.
// console.log(parent.isPrototypeOf(child));  // true.

// МОДУЛЬ 5, ЗАДАЧА №2

// const ancestor = {
//   name: 'Paul',
//   age: 83,
//   surname: 'Dawson',
//   heritage: 'Irish'
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = 'Stacey';
// parent.surname = 'Moore';
// parent.age = 54;

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// // Пиши код выше этой строки

// МОДУЛЬ 5, ЗАДАЧА №3

// function Car(brand, model, price) {
//  this.brand = brand;
//  this.model = model;
//  this.price = price;   
// }

// console.log(new Car('Audi', 'Q3', 36000));  // { brand: 'Audi', model: 'Q3', price: 36000 }.
// console.log(new Car('BMW', 'X5', 58900));  // { brand: 'BMW', model: 'X5', price: 58900 }.
// console.log(new Car('Nissan', 'Murano', 31700));  // { brand: 'Nissan', model: 'Murano', price: 31700 }.

// МОДУЛЬ 5, ЗАДАЧА №4

// function Car({brand, model, price}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));  // { brand: 'Audi', model: 'Q3', price: 36000 }.
// console.log(new Car({ brand: 'BMW', model: 'X5', price: 58900 }));  // { brand: 'BMW', model: 'X5', price: 58900 }.
// console.log(new Car({ brand: 'Nissan', model: 'Murano', price: 31700 }));  // { brand: 'Nissan', model: 'Murano', price: 31700 }.

// МОДУЛЬ 5, ЗАДАЧА №5

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function() {
//   return this.price;
// };

// Car.prototype.changePrice = function(newPrice) {
// this.price = newPrice;
// };

// console.log(Car.prototype.hasOwnProperty('getPrice'));  // true.
// console.log(Car.prototype.hasOwnProperty('changePrice'));  // true.
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));  // getPrice() вернет число 36000.
// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));  // changePrice(35000) и последующем вызове getPrice() вернет число 35000.

// МОДУЛЬ 5, ЗАДАЧА №6

// function Storage(items) {
//   this.items = items;
// }
// Storage.prototype.getItems = function () {
//   return this.items;
// };
// Storage.prototype.addItem = function (newItem) {
//   return this.items.push(newItem);
// };
// Storage.prototype.removeItem = function (item) {
//   if (this.items.includes(item)) {
//     return this.items.splice(this.items.indexOf(item), 1);
//   }
//   return this.items;
// };


// // Пиши код выше этой строки
// const storage = new Storage(['Нанитоиды', 'Пролонгер', 'Антигравитатор']);
// console.log(storage);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem('Дроид');
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem('Пролонгер');
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// МОДУЛЬ 5, ЗАДАЧА №7

// function StringBuilder(baseValue) {
//   this.value = baseValue;
// };

// StringBuilder.prototype.getValue = function() {
// return this.value;
// }
// StringBuilder.prototype.padEnd = function(str) {
// return this.value+=str;
// }
// StringBuilder.prototype.padStart = function(str) {
// return this.value = str + this.value;
// }
// StringBuilder.prototype.padBoth = function(str) {
// return this.value = str + this.value + str;
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// МОДУЛЬ 5, ЗАДАЧА №8

// class Car {
// }
// const mango = new Car();

// МОДУЛЬ 5, ЗАДАЧА №9

// class Car {
//   constructor({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
//   }
// }

// МОДУЛЬ 5, ЗАДАЧА №10

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//   return this.price;
//   }
//   changePrice(newPrice) {
//   this.price = newPrice;
//   }
// }

// МОДУЛЬ 5, ЗАДАЧА №11

// class Car {
  
//   #brand;
  
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//   return this.#brand;
//   }
//   changeBrand(newBrand) {
//   this.#brand = newBrand;
//   }
// }

// МОДУЛЬ 5, ЗАДАЧА №12

// class Storage {
//   #items;
//   constructor(items) {    
//   this.#items = items;
//   }

// getItems() {
//   return this.#items;
// }

// addItem(newItem) {
//   this.#items.push(newItem);
// }

// removeItem(item) {
//   const itemIndex = this.#items.indexOf(item);
//   this.#items.splice(itemIndex, 1);
// }
  
// }
// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

// МОДУЛЬ 5, ЗАДАЧА №13

// class StringBuilder{
//   #value;
  
//   constructor(baseValue) {
//   this.#value = baseValue;
//   }
//   getValue() {
//   return this.#value;
//   }

// padEnd(str) {
//   this.#value += str;
//   }

// padStart(str) {
//   this.#value = str + this.#value;
//   }

// padBoth(str) {
//   this.padStart(str);
//   this.padEnd(str);
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder('.');
// console.log(builder.getValue()); // '.'
// builder.padStart('^');
// console.log(builder.getValue()); // '^.'
// builder.padEnd('^');
// console.log(builder.getValue()); // '^.^'
// builder.padBoth('=');
// console.log(builder.getValue()); // '=^.^='

// МОДУЛЬ 5, ЗАДАЧА №14

// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }


// ПРИМЕР СТАТИЧЕСКОГО СВОЙСТВА КЛАССА//
// class User {
//   // Объявление и инициализация статического свойства
//   static TYPES = {
//     ADMIN: 'admin',
//     EDITOR: 'editor',
//   };
//   #email;
//   #type;

//   constructor({ email, type }) {
//     this.#email = email;
//     this.#type = type;
//   }

//   get type() {
//     return this.#type;
//   }

//   set type(newType) {
//     if (User.TYPES[newType] === undefined) {
//       console.log('Ошибка! Такого типа пользователя не существет');
//       return;
//     }

//     this.#type = newType;
//   }
// }

// const mango = new User({
//   email: 'mango@mail.com',
//   type: User.TYPES.ADMIN,
// });

// console.log(mango.TYPES); // undefined
// console.log(User.TYPES); // { ADMIN: 'admin', EDITOR: 'editor' }

// console.log(mango.type); // admin
// mango.type = User.TYPES.EDITOR;
// console.log(mango.type); // editor

// /ПРИМЕР СТАТИЧЕСКОГО СВОЙСТВА КЛАССА//

// МОДУЛЬ 5, ЗАДАЧА №15

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
    
//     if (newPrice <= Car.MAX_PRICE) {
//       this.#price = newPrice;
//     return newPrice;
//     }    
//     return;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({price: 35000});
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000



// // ПРИМЕР СТАТИЧЕСКОГО МЕТОДА КЛАССА//
// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: 'mango@mail.com' });

// console.log(
//   User.isEmailTaken('poly@mail.com')
// ); // false

// console.log(
//   User.isEmailTaken('mango@mail.com')
// ); // true

// /ПРИМЕР СТАТИЧЕСКОГО МЕТОДА КЛАССА//

// МОДУЛЬ 5, ЗАДАЧА №16

// class Car {
//   static #MAX_PRICE = 50000;
//   // Пиши код ниже этой строки
// static checkPrice(price) {
//   this.price=price;
// if(price>Car.#MAX_PRICE) {
// return 'Внимание! Цена превышает допустимую.';
// }
//   return 'Всё хорошо, цена в порядке.';
// }

//   // Пиши код выше этой строки
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // Всё хорошо, цена в порядке.
// console.log(Car.checkPrice(bmw.price)); // Внимание! Цена превышает допустимую.


// // ПРИМЕР НАСЛЕДОВАНИЕ КЛАССОВ //
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   // Тело класса ContentWriter
// }

// const writer = new ContentWriter('mango@mail.com');
// console.log(writer); // { email: 'mango@mail.com' }
// console.log(writer.email); // 'mango@mail.com'
// // /ПРИМЕР НАСЛЕДОВАНИЕ КЛАССОВ //

// МОДУЛЬ 5, ЗАДАЧА №17

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Пиши код ниже этой строки

// class Admin extends User {
//   static AccessLevel = { 
//     BASIC: 'basic', 
//     SUPERUSER: 'superuser'
//   } 
// }

//  console.log(Admin.AccessLevel.BASIC);  // 'basic'
//  console.log(Admin.AccessLevel.SUPERUSER); // 'superuser'


// // ПРИМЕР Конструктор дочернего класса //
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class ContentWriter extends User {
//   posts;

//   constructor({ email, posts }) {
//     // Вызов конструктора родительского класса User
//     super(email);
//     this.posts = posts;
//   }
// }

// const writer = new ContentWriter({ email: 'mango@mail.com', posts: [] });
// console.log(writer); // { email: 'mango@mail.com', posts: [] }
// console.log(writer.email); // 'mango@mail.com'
// // /ПРИМЕР Конструктор дочернего класса //


// МОДУЛЬ 5, ЗАДАЧА №18
// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Пиши код ниже этой строки
  
//   constructor({email, accessLevel}) {
//   super(email);
//     this.accessLevel = accessLevel;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };
//   static accessLevel = {};
//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser

// МОДУЛЬ 5, ЗАДАЧА №19

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Пиши код ниже этой строки
  
//  blacklistedEmails = [];
  
//   blacklist(email) {
//   this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {

//     if (this.email === email) {
//      return this.blacklistedEmails.includes(email)
//     }
//     return this.email !== email;

//   // if(this.blacklistedEmails.includes(email)) {
//   // return this.email === email;
//   // }
//     // return;
//   }

//   static AccessLevel = {
//     BASIC: 'basic',
//     SUPERUSER: 'superuser'
//   };

//   accessLevel;

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   // Пиши код выше этой строки
// }

// const mango = new Admin({
//   email: 'mango@mail.com',
//   accessLevel: Admin.AccessLevel.SUPERUSER
// });

// console.log(mango.email); // mango@mail.com
// console.log(mango.accessLevel); // superuser
// mango.blacklist('poly@mail.com');
// console.log(mango.blacklistedEmails); // 'poly@mail.com'
// console.log(mango.isBlacklisted('mango@mail.com')); //  false
// console.log(mango.isBlacklisted('poly@mail.com')); // true 