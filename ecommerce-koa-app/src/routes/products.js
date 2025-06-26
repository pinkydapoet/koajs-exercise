const Router = require('koa-router');
const productsController = require('../controllers/productsController');

const router = new Router();

router.get('/products', productsController.getAllProducts);
router.get('/product/:id', productsController.getProductById);

module.exports = router;