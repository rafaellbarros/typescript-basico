var Animal = /** @class */ (function () {
    function Animal(name, color) {
        var _this = this;
        this.getColor = function () { return _this.color; };
        this.name = name;
        this.color = color;
    }
    Animal.prototype.getNome = function () {
        return this.name;
    };
    return Animal;
}());
var Animal2 = /** @class */ (function () {
    function Animal2(name, color) {
        var _this = this;
        this.name = name;
        this.color = color;
        this.getNome = function () { return _this.name; };
        this.getColor = function () { return _this.color; };
    }
    return Animal2;
}());
var myAnimal = new Animal('Cavalo', 'Marron');
console.log(myAnimal.getNome());
console.log(myAnimal.getColor());
var myAnimal2 = new Animal2('Leao', 'Amarelo');
console.log(myAnimal2.getNome());
console.log(myAnimal2.getColor());
