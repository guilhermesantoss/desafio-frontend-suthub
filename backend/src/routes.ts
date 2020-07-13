import express from 'express';

import UsersController from './controllers/UsersController';
import LoginController from './controllers/LoginController';

import { auth } from './middlewares/auth';

const routes = express.Router();

const usersController = new UsersController();
const loginController = new LoginController();

routes.post('/login', loginController.login);
routes.post('/users', usersController.create);

routes.use(auth);

routes.get('/users', usersController.index);
routes.get('/users/:id', usersController.show);

export default routes;