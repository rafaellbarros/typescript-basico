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

const funcao = <T>(param: T): T => param ;  

const variable: number = funcao<number> (2);

class Lista<T> {
    items: Array<T> = [];

    add(item: T) {
        this.items.push(item);
    }

    remove(item: T) {
    }
}

const lista = new Lista<number>();

lista.add(2);
lista.add(4);

lista.items.forEach( e => console.log(e));