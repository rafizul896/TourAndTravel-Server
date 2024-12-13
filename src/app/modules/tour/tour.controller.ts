import { NextFunction, Request, Response } from 'express';
import { tourService } from './tour.service';
import sendResponse from '../../../sendResponse';
import httpStatus from 'http-status';

const createTour = async (req: Request, res: Response,next:NextFunction) => {
  try {
    const tour = req.body;
    const result = await tourService.createTour(tour);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tour is created succesfully',
      data: result,
    });
  } catch (err) {
    // res.status(404).json({
    //   success: false,
    //   data: err,
    // });
    next(err)
  }
};

const getAllTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getAllTours();

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tours are retrieved succesfully',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

const getATours = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.tourId;
    const result = await tourService.getATour(tourId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tour is retrieved succesfully',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

const updateATour = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.tourId;
    const data = req.body;

    const result = await tourService.updateATour(tourId, data);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tour is updated succesfully',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

const deleteATour = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.tourId;

    const result = await tourService.deleteATour(tourId);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Tour is deleted succesfully',
      data: result,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      data: err,
    });
  }
};

export const tourController = {
  createTour,
  getAllTours,
  getATours,
  updateATour,
  deleteATour,
};
