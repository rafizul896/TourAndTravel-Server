import { ITour } from './tour.interface';
import Tour from './tour.model';

const createTour = async (payload: ITour) => {
  const result = await Tour.create(payload);
  return result;
};

const getAllTours = async (query: Record<string, unknown>) => {
  const searchTerm = query?.searchTerm || '';
  const searchableFields = ['name', 'startLocation', 'locations'];

  const result = await Tour.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  return result;
};

const getSingleTour = async (id: string) => {
  const result = await Tour.findById(id);
  return result;
};

const updateATour = async (id: string, data: Partial<ITour>) => {
  const result = await Tour.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteATour = async (id: string) => {
  const result = await Tour.findByIdAndDelete(id);
  return result;
};

export const tourService = {
  createTour,
  getAllTours,
  getSingleTour,
  updateATour,
  deleteATour,
};
