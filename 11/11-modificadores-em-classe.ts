interface IAnimal {
    name: string;
    color: string;
}

class Animal implements IAnimal {
    private attr;
    protected attr1 = 'valor';

    constructor(public name: string, public color: string) { }
    
    private falar(): void { }

    protected correr(): void { console.log('correr do animal') }

    public andar(): void { console.log('andar do animal') }

    protected comer(): void { this.falar(); console.log('comer do animal') }
}

class Coelho extends Animal {
    tamanhoOrelha: number;

    public comer(): void {
        console.log(this.attr1);
        super.comer();
        console.log('comer do coelho');
    }
    
    public calculaCorrida() { console.log('calcula corrida -> '); this.correr() }
}

const coelho:Coelho = new Coelho('Meu coelho', 'azul');
console.log(coelho.name);
console.log(coelho.color);
coelho.andar();
coelho.calculaCorrida();
coelho.comer();





