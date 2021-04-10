// const toGetResult = function (a, b, callback) {
//   return callback(a, b);
// }
// const toGetSum = function (x, y) {
//   return x + y;
// }
// let result = toGetResult(4, 7, toGetSum);
// console.log(result);

// const toGetMult = function (x, y) {
//   return x + y;
// }

// result = toGetResult(6, 8, toGetMult);
// console.log(result);

// const toGetPow = function (x, y) {
//   return x ** y;
// }
// result = toGetResult(3, 8, toGetPow);
// console.log(result);


// const toLearnJS = function (value1, value2, value3, callback1, callback2, callback3) {
//   callback1(value1);
//   callback2(value2);
//   callback3(value3);
// };

// const toRead = function (book) {
//   console.log(`Нужно читать${book}`);
// };

// const toWrite = function (code) {
//   console.log(`Нужно писать${code}`);
// };

// const toWatch = function (video) {
//   console.log(`Нужно смотреть${video}`);
// };

// result = toLearnJS('JS for babies', 'приложение', 'вебинары', toRead, toWrite, toWatch);

// result = toLearnJS('docs', 'functions', 'мастерклассы', toRead,  toWrite,  toWatch) 


// const toLearnProgramming = function (array, func) {
//   console.log(array);
//   for (let elem of array) {
//     console.log(elem);
//     return func(elem)ж
//   }
    
//    console.log(func);
// };
// result = toLearnProgramming(['homework', 'classwork'], toDo);
// console.log(result);


const product = {
  name: 'apple',
  weight: 1,
  price: 20,
  toChangeWeight(newWeight) {
    return this.weight = newWeight;
  },
  toChangePrice(newPrice) {
    return this.price = newPrice;
  },
  toChangeAllProps(value1 = 'product', value2 = 0, value3 = 0) {
    this.name = value1;
    this.weight = value2;
    this.price = value3;
    return(this.name, this.weight,this.price)
    
  },
}
console.log(product);
console.log(product.weight);
console.log(product['price']);

product.toChangeWeight(5);
console.log(product);
console.log(product.weight);
console.log(product['price']);

product.toChangePrice(50);
console.log(product);
console.log(product.price);
console.log(product['price']);

const product1 = {
  name: 'banana',
  price: 60,
  weight: 0,
}

const product2 = {
  name: 'ananas',
  price: 0,
  weight: 100,
}
console.log(product1);
console.log(product2);

product.toChangePrice.call(product1, 80);
console.log(product1);
console.log(product2);

product.toChangePrice.call(product2, 120);
console.log(product1);
console.log(product2);

product.toChangeAllProps();
console.log(product);

const props = ['grape', 10, 100];
product.toChangeAllProps.apply(product1, props);
console.log(product1);

product.toChangeAllProps.call(product1, props);
console.log(product1);

const transform = {
  name: 'Bambalbee',
  speed: 100,
  maxSpeed: 170,
  charge: '65%',  
}
transform.toLowCharge = function () {
  this.charge = (parseInt(this.charge) - 1) + '%';
  console.log(this.charge);
}
transform.toLowCharge();

transform.toUpCharge = function () {
  this.charge = (parseInt(this.charge) + 1) + '%';
  console.log(this.charge);
}
transform.toUpCharge();

transform.toUpSpeed = function (value) {
 let{ speed, maxSpeed } = this;
  return maxSpeed >= speed + value ? console.log(speed += value) : console.log('Куда разогнался...');
}

transform.toUpSpeed(30);
console.log(transform.speed);


transform.toLowSpeed = function (value) {
  console.log(this.speed - 10);
  // const { speed, lowSpeed } = this;
  // return lowSpeed
   if ((this.speed - value) > 0) {
     this.speed -= value;
     return transform.speed;
   }
   return console.log('Не тормози...');
}
transform.toLowSpeed(15);
console.log(transform.speed);

//*****//

const user = {
  _name: 'Katerina',
  _age: 36,
  _genderes: 'female',
  get name() {
    return this._name;
  },
  set name(value) {
    return this._name = value;
  },
  get genderes() {
    return this._genderes;
   },
  set genderes(value) {
    return this._genderes = value;
  },
  get age() {
    return this._age;
   },
  set age(value) {
    return this._age += value;
  },
  toPaint(...img) {
    // return `Я рисую ${img}`;
    return `Я рисую ${img}`;
  },
}
console.log(user);

console.log(user.name);
 
user.name = 'Katya';
console.log(user.name);

user.genderes = 'male'
console.log(user.genderes);

user.age + 1;
console.log(user.age + 1);

//*****//

const user1 = {
  _name: 'Anna',
  _age: 18,
  _genderes:'female',
}
user.toPaint.call(user1);
console.log(user.toPaint.call(user1, 'яблоко'));

console.log(user.toPaint.call(user1, 'солнышко!'));

const array = ['дерево ', ' дом ', ' дорогу.'];
console.log(user.toPaint.call(user1, array));

