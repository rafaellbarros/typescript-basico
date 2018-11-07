class Animal {
    private name: string;
    private color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    public getNome(): string {
        return this.name;
    }

    public getColor(): string {
        return this.color;
    }
    
}

class Animal2 {

    constructor(public name: string, public color: string) { }

    public getNome = (): string => this.name;
    public getColor = (): string => this.color;
    
}

const myAnimal = new Animal('Cavalo', 'Marron');

console.log(myAnimal.getNome());
console.log(myAnimal.getColor());

const myAnimal2 = new Animal2('Leao', 'Amarelo');

console.log(myAnimal2.getNome());
console.log(myAnimal2.getColor());