const homeController = require('../controllers/home.controller');
const router = require('express').Router();

module.exports = app => {
    router.get('/abc', homeController.getList)
    app.use('/api', router);
}
