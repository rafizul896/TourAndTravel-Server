import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AuthServices } from './auth.service';
import httpStatus from 'http-status';

const register = catchAsync(async (req, res) => {
  const result = await AuthServices.register(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: `${req?.body?.role} is created succesfully!`,
    data: result,
  });
});

export const AuthControllers = {
  register,
};
