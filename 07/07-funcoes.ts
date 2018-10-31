
const soma = function(x: number, y: number): number {
    return x + y;
};

const resultado: number = soma(2,3);

console.log(resultado);

const soma2 = (x: number, y: number): number => {
    return x + y;
}

const soma3 = (x: number, y: number): number => x + y;

const funcao = (sobrenome:string) => {
    return `Rafael ${sobrenome}`;
}

const funcao1 = (sobrenome: string) => `Rafael ${sobrenome}`;

const funcaoDefaultParameters = (firstName: string, lastName: string = 'Silva') => {
    return console.log(`${firstName} ${lastName}`);
};

funcaoDefaultParameters('Rafael');

const funcaoOptionalParameters = (firstName: string, lastName?: string) => {
    return console.log(`${firstName} ${lastName !== undefined ? lastName : ''}`);
}

funcaoOptionalParameters('Rafael');