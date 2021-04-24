//МОДУЛЬ 4, ЗАДАЧА №1


// function makePizza() {
//   return 'Ваша пицца готовится, ожидайте.';
// }
// // Пиши код ниже этой строки

// const result = makePizza('Ваша пицца готовится, ожидайте.');
// const pointer = makePizza;

//МОДУЛЬ 4, ЗАДАЧА №2

// function deliverPizza(pizzaName) {
 
//   return `Доставляем пиццу ${pizzaName}.`;  
// }

// function makePizza(pizzaName) {
//   return `Пицца ${pizzaName} готовится, ожидайте...`;
// }

// // Пиши код ниже этой строки
// function makeMessage(pizzaName, callback) {
//   let message = '';  
//   console.log(message = callback(pizzaName));
//   return message = callback(pizzaName);    
// }


//  makeMessage('Роял гранд', makePizza) // 'Пицца Роял гранд готовится, ожидайте...'.
//  makeMessage('Ультрасыр', deliverPizza) // 'Доставляем пиццу Ультрасыр.'.



//Пример колбэка из интернета

//  const makePizza = function (title, cb) {
//  console.log(`Заказ на приготовление пиццы «${title}» получен. Начинаем готовить…`); 
//  setTimeout(cb, 3000);
// }

// const readBook = function () {
//  console.log('Читаю книгу «Колдун и кристалл»…');
// }

// const eatPizza = function () {
//   console.log('Ура! Пицца готова, пора подкрепиться.');
// }

// makePizza('Пеперонни', eatPizza);
// readBook();


//МОДУЛЬ 4, ЗАДАЧА №3

// function makePizza(pizzaName, callback) {
//   console.log(`Пицца ${pizzaName} готовится, ожидайте...`);
//   callback(pizzaName);
// }

// makePizza('Роял гранд', function deliverPizza(pizzaName) {
//   console.log(`Доставляем пиццу ${pizzaName}.`);
// });
// // Пиши код ниже этой строки

// makePizza('Ультрасыр', function eatPizza(pizzaName) {
// console.log(`Едим пиццу ${pizzaName}.`);
// });