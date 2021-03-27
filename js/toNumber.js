let value = '1'

let toNumber = Number(value);
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

value = 'Katerina'
toNumber = Number(value);
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

value = 'undefined'
toNumber = Number(value);
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

value = null
toNumber = Number(value);
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

value = '5e2'
toNumber = Number(value);
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

value = true
toNumber = Number(value);
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

value = false
toNumber = Number(value);
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

toNumber = +value;
console.log('value:', toNumber);
console.log('type of:', typeof toNumber);

value = '5.1a'
console.log(value);
console.log('type of:', typeof value);

let valueInt = parseInt(value);
console.log(valueInt);
console.log('type of:', typeof valueInt);

let valueFloat = parseFloat(value);
console.log(valueFloat);
console.log('type of:', typeof valueFloat);

value = '25.3m'
console.log(value);
console.log('type of:', typeof value);

valueInt = parseInt(value)
console.log(valueInt);
console.log('type of:', typeof valueInt);

valueFloat = parseFloat(value);
console.log(valueFloat);
console.log('type of:', typeof valueFloat);

value = 'length25'
console.log(value);
console.log('type of:', typeof value);

valueInt = parseInt(value)
console.log(valueInt);
console.log('type of:', typeof valueInt);

valueFloat = parseFloat(value);
console.log(valueFloat);
console.log('type of:', typeof valueFloat);