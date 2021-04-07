// console.log(123);

// модуль 2, задача 14

// const fruits = ['яблоко', 'слива', 'груша', 'апельсин', 'банан'];
// // Пиши код ниже этой строки
// const firstTwoEls = fruits.slice(0,2);

// console.log(firstTwoEls);

// const nonExtremeEls = fruits.slice(1, 4);
// console.log(nonExtremeEls);

// const lastThreeEls = fruits.slice(2, 5);
// console.log(lastThreeEls);

// модуль 2, задача 16

// function makeArray(firstArray, secondArray, maxLength) {
//     // Пиши код ниже этой строки
// const makeArray1 =  firstArray.concat(secondArray);
//   if (makeArray1.length <= maxLength) {
//     return makeArray1
//   }
//   return makeArray1.slice(0, maxLength)

    
//     // Пиши код выше этой строки
//   }



// модуль 2, задача 18
// Напиши функцию calculateTotal(number), 
// которая принимает целое число(параметр number) 
//и возвращает сумму всех целых чисел от единицы 
// и до этого числа.Например, если number равно 3, 
// то сумма это 1 + 2 + 3, то есть 6.

// const calculateTotal = 24;  
//   let total = 0;
//   for (let i = 0; i <= calculateTotal; i += 1) {
//     total += i;
//   }
//   console.log(total);

//  calculateTotal = 1; //1.
//calculateTotal = 3; //6.
//  calculateTotal = 7; // 28.
//  calculateTotal = 18; //171.
//  calculateTotal = 24; //300.


// МОДУЛЬ 2, ЗАДАЧА №20

// const calculateTotalPrice = [12, 85, 37, 4];
// let total = 0;

// for (let i = 0; i < calculateTotalPrice.length; i += 1) {
//   console.log(calculateTotalPrice[i]);
//   total += calculateTotalPrice[i];
// }
// console.log(total);


//Модуль 2 задача № 22

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i+=1) {
//     numbers.push(i);
//     // console.log(i);
//   }
// console.log(numbers);
//   // Пиши код выше этой строки
//   return numbers;
// }
// createArrayOfNumbers(1,3)

//Модуль 2 задача № 23

// function filterArray(numbers, value) {
//   const newArray = []

//   for (let i = 0; i<=numbers.length; i+=1) {
//    if (numbers[i]>value) {
//      newArray.push(numbers[i])
//      console.log(newArray);
//   }
//   }
//     return newArray;
// }

// filterArray([1, 2, 3, 4, 5], 3) //возвращает[4, 5].

//Модуль 2 задача № 24

// function checkFruit(fruit) {
//   const fruits = ['яблоко', 'слива', 'груша', 'апельсин'];
//   console.log(fruits.includes(fruit));

//   return fruits.includes(fruit); // Дополни эту строку
// }

// checkFruit('слива') //возвращает true.
// checkFruit('мандарин') //возвращает false.
// checkFruit('груша') //возвращает true.
// checkFruit('Груша') //возвращает false.
// checkFruit('яблоко') //возвращает true.


//Модуль 2 задача № 25

// function getCommonElements(array1, array2) {
  
//   const newArray = [];
      
//   for (let array of array1) {  
    
//     console.log(array);

//     if (array2.includes(array)) {
//       newArray.push(array);
//       console.log(newArray);
//     }
//   }
//   return newArray;   
// }
  


//  getCommonElements([1, 2, 3], [2, 4]) // [2].
//  getCommonElements([1, 2, 3], [2, 1, 17, 19]) // [1, 2].
//  getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) // [12, 27, 3].
//  getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) // [10, 30, 40].
//  getCommonElements([1, 2, 3], [10, 20, 30]) // [].


//Модуль 2 задача № 26

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (let number of order) {

//     total += number;
//     // console.log(total);
//   }
//   console.log(total);

//   // Пиши код выше этой строки
//   return total;
// }

//  calculateTotalPrice([12, 85, 37, 4]) // 138.
//  calculateTotalPrice([164, 48, 291]) // 503.
//  calculateTotalPrice([412, 371, 94, 63, 176]) // 1116.
//  calculateTotalPrice([]) // 0.

//Модуль 2 задача № 29

// function getEvenNumbers(start, end) {
//     // Пиши код ниже этой строки
//   const numbers = [];
//   // console.log(Numbers);

//   for (let i = start; i <= end; i += 1) {
//     // console.log(i);

//     if (i % 2 === 0) {
//       numbers.push(i);       
//     }   
//   }
//   console.log(numbers);
//   return numbers;
  
//     // Пиши код выше этой строки
// }
//  getEvenNumbers(2, 5) // [2, 4].
//  getEvenNumbers(3, 11) // [4, 6, 8, 10].
//  getEvenNumbers(6, 12) // [6, 8, 10, 12].
//  getEvenNumbers(8, 8) // [8].
//  getEvenNumbers(7, 7) // [].


//Модуль 2 задача № 29
// function includes(array, value) {
//   // Пиши код ниже этой строки
//   for (let i = 0; i < array.length; i += 1) {
  
//     if (array[i] === value) {

//       console.log(array[i]);
//       return true;
//     }
//   } 
//   return false;
//     // Пиши код выше этой строки
// }

//  includes([1, 2, 3, 4, 5], 3) // true.
//  includes([1, 2, 3, 4, 5], 17) // false.
//  includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Юпитер') // true.
//  includes(['Земля', 'Марс', 'Венера', 'Юпитер', 'Сатурн'], 'Уран') // false.
//  includes(['яблоко', 'слива', 'груша', 'апельсин'], 'слива') // true.
//  includes(['яблоко', 'слива', 'груша', 'апельсин'], 'киви') // false.