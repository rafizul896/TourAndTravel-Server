import { IUser } from './user.interface';
import User from './user.model';

const createUser = async (payload: IUser): Promise<IUser> => {
  const result = await User.create(payload);
  return result;
};

const getAllUser = async () => {
  const result = await User.find();
  return result;
};

const getAUser = async (id: string) => {
  const result = await User.findById(id);
  return result;
};

const updateAUser = async (id: string, data: IUser) => {
  const result = await User.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteAUser = async (id: string) => {
  const result = await User.findByIdAndDelete(id);
  return result;
};

export const userService = {
  createUser,
  getAllUser,
  getAUser,
  updateAUser,
  deleteAUser,
};
