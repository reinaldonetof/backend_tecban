import express from 'express';
import controller from '../controllers/userController.js';

const app = express();

app.post('/user/', controller.create);
app.get('/user/', controller.findAll);
app.get('/user/login', controller.login);
app.get('/user/:id', controller.findOne);
app.put('/user/:id', controller.update);
app.delete('/user/:id', controller.remove);

export { app as userRouter };
