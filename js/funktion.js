// function expression

const myFunk1 = function () {
  
  let a = 1;
  let b = 2;
  let result = a + b;
  return result;
}
let result = myFunk1()
console.log(result);

const myFunk2 = function (a=0, b=0) {
  a = Number(a);
  b = Number(b);
  let result = a + b;
  return result;
}

result = myFunk2(10, 15)
console.log(result);

result = myFunk2(75)
console.log(result);

result = myFunk2(7, 8, 6)
console.log(result);

result = myFunk2('65.7cm', '11.7m');
console.log(result);

result = myFunk2('двенадцать', 'двадцать два');
console.log(result);

const myFunk3 = function (a = 0, b = 0) {
  a = parseFloat(a)
  b = parseFloat(b)

  let result;
  if ( a === NaN && b === NaN) {
    result = 'Вы ввели нечисловое значение!';
     } else {
    result = a + b    
  }
  return result;  
}
    result = myFunk3('двенадцать', 'двадцать два');
console.log(result);
    
//function declaration

result = myFunk4(4, 2);

function myFunk4(x, y) {
  return x * y;
}
console.log(result);

//arrow function

const myFunk5 = (c, d) => {
  return c ** d;
}
result = myFunk5(5, 3)
console.log(result);