let meuNome: any = 'Rafael Barros Silva';

const count = (<string>meuNome).length;
const count2 = (meuNome as string).length;

console.log(count);
console.log(count2);

let obj = {
    name: 'Rafael Barros'
};

(<any>obj).texto = 'School of Net';
(obj as any).texto2 = 'School of Net';

console.log(obj);

// convertendo number para string
let num = 2;

let numString = num + "";

console.log(typeof numString);

// convertendo string para number
let stringNum = '234';

let num2 = +stringNum;

console.log(typeof num2);
console.log(num2);