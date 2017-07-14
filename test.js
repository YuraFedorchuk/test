var clone = require('clone')

var a = {
    a: 1
}

var b = clone(a);
b.a = 2;
console.log(a);
console.log(b);
