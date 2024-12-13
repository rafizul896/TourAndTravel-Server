import { Router } from 'express';
import { userController } from './user.controller';
const userRouter = Router();

userRouter.post('/createUser', userController.createUser);
userRouter.get('/', userController.getAllUser);
userRouter.get('/:id', userController.getAUser);
userRouter.put('/:id', userController.updateAUser);
userRouter.delete('/:id', userController.deleteAUser);

export default userRouter;
