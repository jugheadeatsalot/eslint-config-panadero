const fs = require('fs');

console.warn(fs);

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

function someFunction() {
    const bool = new Boolean();
    console.warn('bool: ', bool);
    return 1;
}

const someObject = {
    a: [1, 2],
    b: { test: 'test' },
};

const NODE_ENV = 'development';

// a stupid switch statement
// that's right
switch(NODE_ENV) {
    case 'development':
        console.warn('NODE_ENV: ', NODE_ENV);
        console.warn('typeof: ', typeof NODE_ENV);
        break;
    default:
        console.warn('NODE_ENV: ', 'not development');
}

console.warn('someObject: ', someObject);
console.warn('someFunction: ', someFunction());
console.warn('test: ', test(1));
console.warn('test2: ', test2(2));
console.warn('test3: ', test3(3, 2));
