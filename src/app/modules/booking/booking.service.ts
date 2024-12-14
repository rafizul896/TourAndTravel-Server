import { startSession } from 'mongoose';
import Tour from '../tour/tour.model';
import { IBooking } from './booking.interface';
import { Booking } from './booking.model';

const createBooking = async (payload: IBooking): Promise<IBooking> => {
  const session = await startSession();
  session.startTransaction();
  try {
    const { tour, bookedSlots } = payload;

    const requiredTour = await Tour.findById(tour);

    if (!requiredTour) {
      throw new Error('Tour is not found');
    }

    if (requiredTour.availableSeats < bookedSlots) {
      throw new Error('Not enough seats avilable');
    }

    const totalPrice = requiredTour.price * bookedSlots;
    payload.totalPrice = totalPrice;
    payload.bookingStatus = 'pending';

    const booking = await Booking.create([payload], { session });

    const updatedTour = await Tour.findByIdAndUpdate(
      booking[0].tour,
      {
        $inc: { availableSeats: -bookedSlots },
      },
      { new: true, session },
    );

    if (!updatedTour) {
      throw new Error('Failed to update tour');
    }

    await session.commitTransaction();
    await session.endSession();

    return booking[0];
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw err;
  }
};

const getAllBookings = async () => {
  const result = await Booking.find();
  return result;
};

const getSingleBooking = async (id: string) => {
  const result = await Booking.findById(id);
  return result;
};

const updateABooking = async (id: string, data: Partial<IBooking>) => {
  const result = await Booking.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const deleteABooking = async (id: string) => {
  const result = await Booking.findByIdAndDelete(id);
  return result;
};

export const bookingService = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateABooking,
  deleteABooking,
};
