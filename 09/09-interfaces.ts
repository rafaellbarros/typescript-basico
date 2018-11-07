interface ObjectValue {
    category: string;
    product?: string;
}

const show = ({category, product}: ObjectValue) => console.log(category, product);

show({category: 'Categoria'});

const obj: ObjectValue = {category: 'Categoria 1', product: 'Product 1'};

class Product implements ObjectValue {
    category: string;
}

const product = new Product();
product.category = 'Categoria';

console.log(product.category);