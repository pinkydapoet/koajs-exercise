const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../products.json');

const getAllProducts = async (ctx) => {
    const { limit, orderBy } = ctx.query;
    let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

    if (orderBy) {
        products = products.sort((a, b) => {
            return orderBy === 'asc' ? new Date(a.createdAt) - new Date(b.createdAt) : new Date(b.createdAt) - new Date(a.createdAt);
        });
    }

    if (limit) {
        products = products.slice(0, parseInt(limit));
    }

    await ctx.render('products', { products });
};

const getProductById = async (ctx) => {
    const { id } = ctx.params;
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    const product = products.find(product => product.id == id);

    if (!product) {
        ctx.status = 404;
        ctx.body = { message: 'Product not found' };
        return;
    }

    await ctx.render('product', { product });
};

module.exports = {
    getAllProducts,
    getProductById
};