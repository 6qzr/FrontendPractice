export class Product {

    constructor(name, price, stock, category) {
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }

    get isLowStock() {
        return this.stock < 10;
    }

    getFormattedPrice() {
        return `$${this.price.toFixed(2)}`;
    }
}