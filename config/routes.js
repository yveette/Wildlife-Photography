const authController = require('../controllers/auth');
const homeController = require('../controllers/home');
const postController = require('../controllers/post');
const notFoundController = require('../controllers/404');

module.exports = (app) => {
    app.use(homeController);
    app.use(authController);
    app.use(postController);
    app.use(notFoundController);
}