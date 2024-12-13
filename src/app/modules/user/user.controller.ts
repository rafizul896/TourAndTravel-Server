import { Request, Response } from 'express';
import { userService } from './user.service';
import sendResponse from '../../../sendResponse';
import httpStatus from 'http-status';
// req and res menagement

const createUser = async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const result = await userService.createUser(user);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is created succesfully',
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

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Users are retrieved succesfully',
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

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is retrieved succesfully',
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

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is updated succesfully',
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

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User is deleted succesfully',
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
