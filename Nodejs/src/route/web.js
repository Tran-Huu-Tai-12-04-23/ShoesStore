import express from 'express';
import userController from '../controllers/userController';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/get-user', userController.getUsers);
    router.post('/signIn', userController.signIn);
    return app.use('/', router);
};

module.exports = initWebRoutes;
