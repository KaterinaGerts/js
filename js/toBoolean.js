let value = '1'
let toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = '0'
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = ''
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = ' '
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = 'hello world'
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = 1
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = 0
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = 20
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = NaN
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = Infinity
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = null
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

value = undefined
toBoolean = Boolean(value);
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);

toBoolean = !!value;
console.log('value: ', toBoolean);
console.log('type of: ', typeof toBoolean);


//=====

console.log(!!'');
console.log(!!0);
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!false);