/*
const myArray: Array<number> = [];

const funcao = (array: Array<number>) => {

}

*/
/*
function funcao<T>(param: T): T {
    return param;
}
*/
var funcao = function (param) { return param; };
var variable = funcao(2);
var Lista = /** @class */ (function () {
    function Lista() {
        this.items = [];
    }
    Lista.prototype.add = function (item) {
        this.items.push(item);
    };
    Lista.prototype.remove = function (item) {
    };
    return Lista;
}());
var lista = new Lista();
lista.add(2);
lista.add(4);
lista.items.forEach(function (e) { return console.log(e); });
