import { IUser } from '../user/user.interface';

const register = async (payload: IUser) => {
  console.log(payload);
};

export const AuthServices = {
  register,
};
