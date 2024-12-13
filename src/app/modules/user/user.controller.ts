import { Request, Response } from 'express';
import { userService } from './user.service';
// req and res menagement

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.createUser(user);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

const getAUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const result = await userService.getAUser(id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

const updateAUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const data = req.body;

    const result = await userService.updateAUser(id, data);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

const deleteAUser = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await userService.deleteAUser(id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

export const userController = {
  createUser,
  getAllUser,
  getAUser,
  updateAUser,
  deleteAUser,
};
