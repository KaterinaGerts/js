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


// модуль 2, задачв 16

//  возвращает ['Манго', 'Поли', 'Аякс']

function makeArray(firstArray, secondArray, maxLength) {
  
  firstArray = firstArray.slice(' ');
  secondArray = secondArray.slice(' ');    
 const newArray = firstArray.concat(secondArray);
    
  if (newArray > maxLength) {
    console.log(maxLength); 
  }
  console.log(newArray); 
}

makeArray = (['Манго', 'Поли'], ['Аякс', 'Челси'], 3);