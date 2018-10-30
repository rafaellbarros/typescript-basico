// boleano
const valido: boolean = false;
console.log(valido);

// numeros
const numero: number = 12;
const numero1: number = 12.50;
const numero2: number = 0xFA;
const resultado = `${numero} - ${numero1} - ${numero2}`;
console.log(resultado);

// string
const nome: string = 'Rafael';
const templateString = `Meu nome é ${nome}`;
console.log(templateString);

// Array
const arrayString: string[] = ['a', 'b', 'c'];
const arrayString2 = new Array<string>('c', 'd', 'e');
arrayString.forEach(arr => console.log(`arr => ${arr}`));
arrayString2.filter(arr => { if (arr === 'c') return arr }).forEach(arr => console.log(`one way ${arr}`));
arrayString2.filter(arr => (arr === 'c')).forEach(arr => console.log(`simplified way ${arr}`));

// Enum
enum estadoCivil { SOLTEIRO, CASADO, DIVORCIADO }
enum estadoCivil1 { 
    SOLTEIRO = 'Solteiro', 
    CASADO = 'Casado', 
    DIVORCIADO = 'Divorciado' 
}
const meuEstadoCivil:estadoCivil = estadoCivil.SOLTEIRO;
const meuEstadoCivil1:estadoCivil1 = estadoCivil1.SOLTEIRO;
console.log(`${meuEstadoCivil} - ${meuEstadoCivil1}`);