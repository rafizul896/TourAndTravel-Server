import { ITour } from './tour.interface';
import Tour from './tour.model';

const createTour = async (payload: ITour) => {
  const result = await Tour.create(payload);
  return result;
};

const getAllTours = async (query: Record<string, unknown>) => {
  const searchTerm = query?.searchTerm || '';
  const queryObj = { ...query };
  const searchableFields = ['name', 'startLocation', 'locations'];
  const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
  excludeFields.forEach((key) => delete queryObj[key]);

  const searchQuery = Tour.find({
    $or: searchableFields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  // filterging
  const filterQuery = searchQuery.find(queryObj);

  // sorting
  let sort = '-createdAt';

  if (query?.sort) {
    sort = query.sort as string;
  }

  const sortQuery = filterQuery.sort(sort);

  // pagination
  const page = Number(query?.page) || 1;
  const limit = Number(query?.limit) || 10;
  const skiped = (page - 1) * limit;

  const paginatedQuery = sortQuery.skip(skiped).limit(limit);

  // fieldQuery
  let fields = '-__v';

  if (query?.fields) {
    fields = (query.fields as string)?.split(',')?.join(' ');
  }

  const fieldQuery = await paginatedQuery.select(fields);

  return fieldQuery;
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
