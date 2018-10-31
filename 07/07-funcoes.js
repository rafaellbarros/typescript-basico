var soma = function (x, y) {
    return x + y;
};
var resultado = soma(2, 3);
console.log(resultado);
var soma2 = function (x, y) {
    return x + y;
};
var soma3 = function (x, y) { return x + y; };
var funcao = function (sobrenome) {
    return "Rafael " + sobrenome;
};
var funcao1 = function (sobrenome) { return "Rafael " + sobrenome; };
var funcaoDefaultParameters = function (firstName, lastName) {
    if (lastName === void 0) { lastName = 'Silva'; }
    return console.log(firstName + " " + lastName);
};
funcaoDefaultParameters('Rafael');
var funcaoOptionalParameters = function (firstName, lastName) {
    return console.log(firstName + " " + (lastName !== undefined ? lastName : ''));
};
funcaoOptionalParameters('Rafael');
