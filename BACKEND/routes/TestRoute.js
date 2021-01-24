const express = require('express');
const router = express.Router();
const TestController = require('../controllers/TestController');
const testController = new TestController();

const testRoute = (app) => {
    app.use('/test',router);

    router.get('/',testController.greetUser);
    router.post('/',testController.takeUserData);
    router.get('/gookie',testController.setCookie);
};

module.exports = {
    testRoute,
}