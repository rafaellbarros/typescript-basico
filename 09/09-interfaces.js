var show = function (_a) {
    var category = _a.category, product = _a.product;
    return console.log(category, product);
};
show({ category: 'Categoria' });
var obj = { category: 'Categoria 1', product: 'Product 1' };
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
var product = new Product();
product.category = 'Categoria';
console.log(product.category);
