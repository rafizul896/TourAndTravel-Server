import { Router } from 'express';
import { userController } from './user.controller';
const userRouter = Router();

userRouter.post('/createUser', userController.createUser);
userRouter.get('/getAllUser', userController.getAllUser);
userRouter.get('/:id', userController.getAUser);
userRouter.put('/updateAUser/:id', userController.updateAUser);
userRouter.delete('/deleteAUser/:id', userController.deleteAUser);

export default userRouter;
