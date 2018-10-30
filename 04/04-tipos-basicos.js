// boleano
var valido = false;
console.log(valido);
// numeros
var numero = 12;
var numero1 = 12.50;
var numero2 = 0xFA;
var resultado = numero + " - " + numero1 + " - " + numero2;
console.log(resultado);
// string
var nome = 'Rafael';
var templateString = "Meu nome \u00E9 " + nome;
console.log(templateString);
// Array
var arrayString = ['a', 'b', 'c'];
var arrayString2 = new Array('c', 'd', 'e');
arrayString.forEach(function (arr) { return console.log("arr => " + arr); });
arrayString2.filter(function (arr) { if (arr === 'c')
    return arr; }).forEach(function (arr) { return console.log("one way " + arr); });
arrayString2.filter(function (arr) { return (arr === 'c'); }).forEach(function (arr) { return console.log("simplified way " + arr); });
// Enum
var estadoCivil;
(function (estadoCivil) {
    estadoCivil[estadoCivil["SOLTEIRO"] = 0] = "SOLTEIRO";
    estadoCivil[estadoCivil["CASADO"] = 1] = "CASADO";
    estadoCivil[estadoCivil["DIVORCIADO"] = 2] = "DIVORCIADO";
})(estadoCivil || (estadoCivil = {}));
var estadoCivil1;
(function (estadoCivil1) {
    estadoCivil1["SOLTEIRO"] = "Solteiro";
    estadoCivil1["CASADO"] = "Casado";
    estadoCivil1["DIVORCIADO"] = "Divorciado";
})(estadoCivil1 || (estadoCivil1 = {}));
var meuEstadoCivil = estadoCivil.SOLTEIRO;
var meuEstadoCivil1 = estadoCivil1.SOLTEIRO;
console.log(meuEstadoCivil + " - " + meuEstadoCivil1);
