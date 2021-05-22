// console.log(123);
// const numbersEl = document.getElementById('numbers')
//  console.log(numbersEl.children);
//  console.dir(numbersEl);

// //const arrayOfChildren = Array.from(numbersEl.children)
// // const arrayOfChildren = [...numbersEl.children]
// // console.log(arrayOfChildren);
// // arrayOfChildren.forEach((elem) => {
// //   console.log(elem);
// //   elem.textContent = 'hi';
// //   console.log(elem);
// // })

// const titleEl1 = document.createElement('h2');
// console.log(titleEl1);
// titleEl1.textContent = 'Calculator';
// titleEl1.setAttribute('lang', 'en');
// console.log(titleEl1.getAttribute('lang'));

// const titleEl2 = titleEl1.cloneNode(true);
// const titleEl3 = titleEl1.cloneNode(true);
// const titleEl4 = titleEl1.cloneNode(true);

// const calculatorEl = document.getElementById('calculator');
// console.log(calculatorEl);

// // Метод встраивания одного элемента

// // calculatorEl.insertAdjacentElement('beforebegin', titleEl1);
// // calculatorEl.insertAdjacentElement('afterbegin', titleEl2);
// // calculatorEl.insertAdjacentElement('beforeend', titleEl3);
// // calculatorEl.insertAdjacentElement('afterend', titleEl4);

// // Методы встраивания одного и более элементов (если больше 1го элемента, мы их распыляем при передаче(...) )

// // calculatorEl.before(titleEl1);
// // calculatorEl.prepend(titleEl2);
// // calculatorEl.append(titleEl3);
// // calculatorEl.after(titleEl4);

// const arrayOfTitles1 = [titleEl1, titleEl2,]
// console.log(arrayOfTitles1);
// const arrayOfTitles2 = [ titleEl3, titleEl4]
// console.log(arrayOfTitles2);


// // const arrayOfTitles2 = document.createElement('h2');
// // titleEl2.textContent = 'title2';
// // const arrayOfTitles3 = document.createElement('h2');
// // titleEl3.textContent = 'title3';
// // const arrayOfTitles4 = document.createElement('h2');
// // titleEl4.textContent = 'title4';

// calculatorEl.before(...arrayOfTitles1);
// calculatorEl.prepend(...arrayOfTitles2);
// // calculatorEl.append(...arrayOfTitles3);
// // calculatorEl.after(...arrayOfTitles4);

// function makeElements(element, value) {
//   const divsEl = value.map(elem => {
//     const divEl = document.createElement(element);
//     divEl.textContent = elem;
//     console.log(divEl.textContent);
//     return divEl;
//   })
//   return divsEl;
// }
// const result = makeElements('div', ['a', 'b', 'c', 'd', 'e']);
// makeElements('div', ['a', 'b', 'c', 'd', 'e']);
// console.log(makeElements('div', ['a', 'b', 'c', 'd', 'e']));
// calculatorEl.append(...result);

// calculatorEl.addEventListener('click', (e) => {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.currentTarget);
//   e.target.style.color = 'green';
//   if (e.target.textContent === 'c') {
//     e.target.style.color = 'green';
//   } else {
//     e.target.style.color = 'red';
//   }
// });

// const navList = `<ul><li><a>home</a></li><li><a>about</a></li><li><a>contact</a></li></ul>`;
// calculatorEl.insertAdjacentHTML('beforebegin', navList);

// //calculatorEl.innerHTML = navList;

// const formEl = document.getElementById('form');
// console.log(formEl);
// const objects = [];
// const newObj = formEl.addEventListener('submit', handleSubmit);

// function handleSubmit(e) {  
//   // console.log(e);
//   e.preventDefault();
//   // console.log(e.target);
//   // console.log(e.target.elements);
//   // console.log(e.target.elements.name);
//   // console.log(e.target.elements.password);
//   // console.dir(e.target.elements.name);
//   // console.log(e.target.elements.name.value);
//   // console.log(e.target.elements.password.value);
  
//   const object = {
//     name: e.target.elements.name.value,
//     password: e.target.elements.password.value,
//   }

//   const { name, password } = e.target.elements;
//   const obj = { name: name.value, password: password.value}
//   console.log(obj);
//   objects.push(obj);
//   console.log(objects);
//   name.value = '';
//   password.value = '';
//   return objects;
// }

const array = [{
  title: 'notre dame de paris',
  url: 'https://i.pinimg.com/originals/f3/40/f4/f340f42241a91966444229a51ec07ac6.jpg', 
author: 'victor hugo' },
  {
    title: "code da vinci",
    url: 'https://www.babcockbooks.com/pictures/26675.jpg',
    author: 'dan brown'
  },
  {
    title: "мастер и маргарита",
    url: 'https://knijky.ru/sites/default/files/styles/264x390/public/31583.jpg?itok=rm1YiVJV',
    author: 'Михаил булгаков'
  }];

function createList(array) {
  console.log(array);
  return array.map((elem) => {
    const item = document.createElement('li');
    const title = document.createElement('h2');
    const img = document.createElement('img');
    const author = document.createElement('p');
    img.setAttribute('src', elem.url);
    img.setAttribute('width', '200px') 
    author.textContent = elem.author;
    title.textContent = elem.title;
    item.append(title, img, author);
    return item;
  })
}
const items = createList(array);
console.log(items);
const ulEl = document.getElementById('books');
ulEl.append(...items);
