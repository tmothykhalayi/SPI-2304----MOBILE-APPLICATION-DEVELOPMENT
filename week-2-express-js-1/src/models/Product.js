class Product {
    constructor(id, name, description, price, category, inStock) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.category = category;
        this.inStock = inStock;
    }

    static validate(product) {
        if (!product.name || typeof product.name !== 'string') {
            throw new Error('Invalid product name');
        }
        if (typeof product.price !== 'number') {
            throw new Error('Invalid product price');
        }
        if (!product.category || typeof product.category !== 'string') {
            throw new Error('Invalid product category');
        }
        if (typeof product.inStock !== 'boolean') {
            throw new Error('Invalid inStock value');
        }
    }
}

module.exports = Product;