const calculator = document.querySelector('.calculator');
const numbers = document.querySelector('.numbers');
const operatorsBtn = document.querySelector('.operators');
const results = document.querySelector('.result');
console.log(calculator, numbers, operatorsBtn, results);
const resultBtn = document.querySelector('#result');

console.dir(numbers);
console.log(numbers.children);

//Преобразовали псевдомассив в полноценный массив
console.log([...numbers.children]);

const numsBtn = [...numbers.children];

numsBtn.map((number) => {
  // console.log(number);
  // console.log(number.textContent);
  // console.log(typeof number.textContent);

  // Возьмем значение кнопки по событию нажатия

  number.addEventListener('click', () => {
    console.log(number.textContent);
    
  })
})


class Calculator {
  constructor() {
    this.number = '';
    this.operator = '';
    this.number2 = '';
    this.result = '';
  }
  getValues() {
    numbers.addEventListener('click', (event) => {
      console.log(event.target.textContent);
      // this.number = event.target.textContent;
      // return this.number

      if (this.number !== '' && this.number2 !== '') return;
       
      if (this.number === '') {
        this.number = event.target.textContent;
        return this.number
      }
      
      if (this.number2 === '' && this.number !== '') {
        this.number2 = event.target.textContent;
        return this.number2
      }
    }
    )
  }
  
  getOperator() {
    operatorsBtn.addEventListener('click', (event) => {
      console.log(event.target.textContent);
      this.operator = event.target.textContent;
    })
  }
  getSum() {
    this.result = Number(this.number) + Number(this.number2);
    this.getReset();
    return this.result;
   }
  getDiff() {
    this.result = Number(this.number) - Number(this.number2);
    this.getReset();
    return this.result;
  }
  getMultiply() {
    this.result = Number(this.number) * Number(this.number2);
    this.getReset();
    return this.result;
   }
  getdiv() {
    this.result = Number(this.number) / Number(this.number2);
   this.getReset();
    return this.result;
   }
  getResult() {
    if (this.number2 === '' || this.number === '' || this.operator === '') {
      console.log(`У вас не хватает значения: ${this.number}, ${this.number2}, ${this.operator}`);
    };
    if (this.operator === '+') {
      return this.getSum();
    } else if (this.operator === '-') {
      return this.getDiff();
    } else if (this.operator === '/') {
      return this.getdiv();
    } else if (this.operator === '*') {
      return this.getMultiply();
    } else {
      console.log('Что то пошло не так!');
    }
    
  }
  getReset() {
    this.number = '';
    this.number2 = '';
    this.operator = '';
  }
}

const newCalculator = new Calculator();
console.log(newCalculator);
newCalculator.getValues();
newCalculator.getOperator();
// newCalculator.getResult();

resultBtn.addEventListener('click', () => {
  let total = newCalculator.getResult();
  console.log(total, newCalculator);
})