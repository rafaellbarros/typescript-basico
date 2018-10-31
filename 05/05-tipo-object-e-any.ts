let obj: object = {
    firstName: 'Rafael',
    lastName: 'Barros'
};

// obj = "string";
/*
let obj1: Object = {
    category: 'categoria',
    product: 'produto 1'
};

obj1 = 2;
*/

let variable: any = 4;

variable = {};

variable = 'string';

variable = false;

let myArray:Array<any> = [2, 'string', false, {name: 'Rafael Barros'}];

myArray.forEach(p => console.log(p));