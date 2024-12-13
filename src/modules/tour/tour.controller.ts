import { Request, Response } from 'express';
import { tourService } from './tour.service';

const createTour = async (req: Request, res: Response) => {
  try {
    const tour = req.body;
    const result = await tourService.createTour(tour);
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

const getAllTours = async (req: Request, res: Response) => {
  try {
    const result = await tourService.getAllTours();
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

const getATours = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.tourId;
    const result = await tourService.getATour(tourId);
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

const updateATour = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.tourId;
    const data = req.body;

    const result = await tourService.updateATour(tourId, data);
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

const deleteATour = async (req: Request, res: Response) => {
  try {
    const tourId = req.params.tourId;

    const result = await tourService.deleteATour(tourId);
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

export const tourController = {
  createTour,
  getAllTours,
  getATours,
  updateATour,
  deleteATour,
};
