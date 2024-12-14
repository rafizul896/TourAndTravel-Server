import { Request, Response } from 'express';
import { tourService } from './tour.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const createTour = catchAsync(async (req: Request, res: Response) => {
  const tour = req.body;
  const result = await tourService.createTour(tour);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tour is created succesfully',
    data: result,
  });
});

const getAllTours = catchAsync(async (req, res) => {
  const result = await tourService.getAllTours();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tours are retrieved succesfully',
    data: result,
  });
});

const getSingleTour = catchAsync(async (req: Request, res: Response) => {
  const tourId = req.params.tourId;
  const result = await tourService.getSingleTour(tourId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tour is retrieved succesfully',
    data: result,
  });
});

const updateATour = catchAsync(async (req: Request, res: Response) => {
  const tourId = req.params.tourId;
  const data = req.body;

  const result = await tourService.updateATour(tourId, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tour is updated succesfully',
    data: result,
  });
});

const deleteATour = catchAsync(async (req: Request, res: Response) => {
  const tourId = req.params.tourId;

  const result = await tourService.deleteATour(tourId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Tour is deleted succesfully',
    data: result,
  });
});

export const tourController = {
  createTour,
  getAllTours,
  getSingleTour,
  updateATour,
  deleteATour,
};
