const fs = require('fs');

console.log(fs);

const test = function test(x) {
    if(x > 1) return 'Yes!';
    return 'Nope!';
};

const test2 = (x) => {
    if(x > 1) return 'Yes!';
    return 'Nope!';
};

function test3(x, y) {
    if(x > y) return 'Yes!';
    return 'Nope!';
}

function someFunction(x, y) {
    return x + y;
}

const someObject = {
    a: [1, 2],
    b: {test: 'test'},
};

const NODE_ENV = 'development';

switch(NODE_ENV) {
    case 'development':
        console.log('NODE_ENV: ', NODE_ENV);
        console.log('typeof: ', typeof NODE_ENV);
        break;
    default:
        console.log('NODE_ENV: ', 'not development');
}

console.log('someObject: ', someObject);
console.log('someFunction: ', someFunction());
console.log('test: ', test(1));
console.log('test2: ', test2(2));
console.log('test3: ', test3(3, 2));

const x = true;

if(x) {
    console.log(x);
} else {
    console.log(false);
}
