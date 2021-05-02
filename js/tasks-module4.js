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

//МОДУЛЬ 4, ЗАДАЧА №4

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   order(pizzaName, onSuccess, onError) {
//   if(this.pizzas.includes(pizzaName)) {
//   return onSuccess(pizzaName)
//   } else {
//   return onError(pizzaName)
//   }
//   },
// };
// // Пиши код выше этой строки

// // Колбэк для onSuccess
// function makePizza(pizzaName) {
//   console.log(`Ваш заказ принят. Готовим пиццу ${pizzaName}.`);
//   return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
// }

// // Колбэк для onError
// function onOrderError(pizzaName) {
//   console.log(`Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`);
//   return `Ошибка! В ассортименте нет пиццы с названием ${pizzaName}.`;
// }

// // Вызовы метода с колбэками

// pizzaPalace.order('Аль Копчино', makePizza, onOrderError); // 'Ваш заказ принят. Готовим пиццу Аль Копчино.'.
// pizzaPalace.order('Четыре нарезона', makePizza, onOrderError); // 'Ваш заказ принят. Готовим пиццу Четыре нарезона.'.
// pizzaPalace.order('Биг майк', makePizza, onOrderError); // 'Ошибка! В ассортименте нет пиццы с названием Биг майк.'.
// pizzaPalace.order('Венская', makePizza, onOrderError); // 'Ошибка! В ассортименте нет пиццы с названием Венская.'.

//МОДУЛЬ 4, ЗАДАЧА №5

// const pizzaPalace = {
//   pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
//   // Пиши код ниже этой строки
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       console.log(`В ассортименте нет пиццы с названием «${pizzaName}».`);
//       return `В ассортименте нет пиццы с названием «${pizzaName}».`;
//     }
//     console.log(`Заказ принят, готовим пиццу «${pizzaName}».`);
//     return `Заказ принят, готовим пиццу «${pizzaName}».`;
//   },
//   // Пиши код выше этой строки
// };

// pizzaPalace.order('Аль Копчино'); // 'Заказ принят, готовим пиццу «Аль Копчино».'.
// pizzaPalace.order('Четыре нарезона'); // 'Заказ принят, готовим пиццу «Четыре нарезона».'.
// pizzaPalace.order('Биг майк'); // 'В ассортименте нет пиццы с названием «Биг майк».'.
// pizzaPalace.order('Венская'); // 'В ассортименте нет пиццы с названием «Венская».'.

//МОДУЛЬ 4, ЗАДАЧА №6

// const customer = {
//   username: 'Mango',
//   balance: 24000,
//   discount: 0.1,
//   orders: ['Burger', 'Pizza', 'Salad'],
//   // Пиши код ниже этой строки
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Пиши код выше этой строки
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, 'Steak');
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ['Burger', 'Pizza', 'Salad', 'Steak']

//МОДУЛЬ 4, ЗАДАЧА №7

//Ex.1

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// //Пиши код ниже этой строки
// function composeMessage(position) {
//   //console.log([`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position+1}-й в очереди.`]);
//   return [`Готовим ${this.dish} для ${this.email}. Ваш заказ ${position+1}-й в очереди.`];
// }
// const messages = orders.map((num, index) => {
 
//   console.log(composeMessage.call(num, index));
//   return composeMessage.call(num, index);
// });

///Ex.2

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// Пиши код ниже этой строки
// const messages = [];

// function composeMessage(position) {
  
//   for (let i = 0; i < this.length; i += 1) {
//     console.log(this[i]);
//   messages.push([`Готовим ${this[i].dish} для ${this[i].email}. Ваш заказ ${this.indexOf(this[i]) + 1}-й в очереди.`]);
//   //console.log(messages);
// }
// return messages;
// }
// composeMessage.call(orders);
// console.log(composeMessage.call(orders));

//Ex.3 (правильный)

// const orders = [
//   { email: 'solomon@topmail.ua', dish: 'Burger' },
//   { email: 'artemis@coldmail.net', dish: 'Pizza' },
//   { email: 'jacob@mail.com', dish: 'Taco' },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   //console.log(`Готовим ${this.dish} для ${this.email}.Ваш заказ ${position} -й в очереди.`);
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
//  }

// const messages = [];

// for (let i = 0; i < orders.length; i += 1) {
//   let message = composeMessage.call(orders[i], i + 1);
//   messages.push(message);
//   console.log(message);
// }

//МОДУЛЬ 4, ЗАДАЧА №8

// const orders = [
//   { email: "solomon@topmail.ua", dish: "Burger" },
//   { email: "artemis@coldmail.net", dish: "Pizza" },
//   { email: "jacob@mail.com", dish: "Taco" },
// ];

// // Пиши код ниже этой строки
// function composeMessage(position) {
//   return `Готовим ${this.dish} для ${this.email}. Ваш заказ ${position}-й в очереди.`;
// }

// const messages = [];
// for (let i = 0; i < orders.length; i++) {
//   const msg = composeMessage.apply(orders[i], [i + 1]);
//   messages.push(msg);
// }

//МОДУЛЬ 4, ЗАДАЧА №9

// const pizzaPalace = {
//   company: 'Pizza Palace',
// };

// const burgerShack = {
//   company: 'Burger Shack',
// };

// function composeMessage(customerName) {
//   return `${customerName}, всегда рады вас видеть в «${this.company}».`;
// }
// // Пиши код ниже этой строки

// const pizzaPalaceComposer = composeMessage.bind(pizzaPalace);
// const pizzaPalaceMessage = pizzaPalaceComposer('Манго');
// console.log(pizzaPalaceMessage);

// const burgerShackComposer = composeMessage.bind(burgerShack);
// const burgerShackMessage = burgerShackComposer('Поли');
// console.log(burgerShackMessage);




// pizzaPalaceMessage // 'Манго, всегда рады вас видеть в «Pizza Palace».'
// burgerShackMessage // 'Поли, всегда рады вас видеть в «Burger Shack».'

//МОДУЛЬ 4, ЗАДАЧА №10

// const service = {
//   mailingList: ['mango@mail.com', 'poly@hotmail.de', 'ajax@jmail.net'],
//   subscribe(email) {
//     this.mailingList.push(email);
//     return `Почта ${email} добавлена в рассылку.`;
//   },
//   unsubscribe(email) {
//     this.mailingList = this.mailingList.filter((e) => e !== email);
//     return `Почта ${email} удалена из рассылки.`;
//   },
// };

// function logAndInvokeAction(email, action) {
//   console.log(`Выполняем действие с ${email}.`);
//   return action(email);
// }

// const firstInvoke = logAndInvokeAction('kiwi@mail.uk', service.subscribe.bind(service));
// console.log(firstInvoke);
// // Почта kiwi@mail.uk добавлена в рассылку.

// console.log(service.mailingList);
// /* ['mango@mail.com', 
//     'poly@hotmail.de', 
//     'ajax@jmail.net', 
//     'kiwi@mail.uk']*/
// const secondInvoke = logAndInvokeAction('poly@hotmail.de', service.unsubscribe.bind(service));
// console.log(secondInvoke);
// // Почта poly@hotmail.de удалена из рассылки.

// console.log(service.mailingList); // ['mango@mail.com', 'ajax@jmail.net', 'kiwi@mail.uk']
