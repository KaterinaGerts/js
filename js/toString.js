let value = 1;

let toString = String(value)
console.log('value :', toString);
console.log('type of:', typeof toString);

toString = value + ''
console.log('value :', toString);
console.log('type of:', typeof toString);

value = true;
toString = String(value);
console.log('value :', toString);
console.log('type of:', typeof toString);

toString = value + ''
console.log('value :', toString);
console.log('type of:', typeof toString);

value = null;
toString = String(value);
console.log('value :', toString);
console.log('type of:', typeof toString);

value = undefined;
toString = String(value);
console.log('value :', toString);
console.log('type of:', typeof toString);