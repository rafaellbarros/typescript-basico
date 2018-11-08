interface IAnimal {
    name: string;
    color: string;
    correr();
    andar();
    comer();
}

class Animal implements IAnimal {

    constructor(public name: string, public color: string) { }
    
    public correr(): void { console.log('correr do animal') }

    public andar(): void { console.log('andar do animal') }

    public comer(): void { console.log('comer do animal') }
}

class Coelho extends Animal {
    tamanhoOrelha: number;

    public comer(): void {
        super.comer();
        console.log('comer do coelho');
    }
}

const coelho:Coelho = new Coelho('Meu coelho', 'azul');
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
coelho.correr();
coelho.comer();




