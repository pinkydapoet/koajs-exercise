const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const views = require('koa-views');
const path = require('path');
const productsRoutes = require('./routes/products');

const app = new Koa();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser());
app.use(views(path.join(__dirname, 'views'), { extension: 'ejs' }));

// Routes
app.use(productsRoutes.routes()).use(productsRoutes.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});