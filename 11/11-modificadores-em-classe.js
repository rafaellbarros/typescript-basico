var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal(name, color) {
        this.name = name;
        this.color = color;
        this.attr1 = 'valor';
    }
    Animal.prototype.falar = function () { };
    Animal.prototype.correr = function () { console.log('correr do animal'); };
    Animal.prototype.andar = function () { console.log('andar do animal'); };
    Animal.prototype.comer = function () { this.falar(); console.log('comer do animal'); };
    return Animal;
}());
var Coelho = /** @class */ (function (_super) {
    __extends(Coelho, _super);
    function Coelho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Coelho.prototype.comer = function () {
        console.log(this.attr1);
        _super.prototype.comer.call(this);
        console.log('comer do coelho');
    };
    Coelho.prototype.calculaCorrida = function () { console.log('calcula corrida -> '); this.correr(); };
    return Coelho;
}(Animal));
var coelho = new Coelho('Meu coelho', 'azul');
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
coelho.calculaCorrida();
coelho.comer();
