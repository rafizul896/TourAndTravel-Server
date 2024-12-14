import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { bookingService } from './booking.service';
import httpStatus from 'http-status';

const createBooking = catchAsync(async (req, res) => {
  const booking = req.body;
  const result = await bookingService.createBooking(booking);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking is created succesfully',
    data: result,
  });
});

const getAllBookings = catchAsync(async (req, res) => {
  const result = await bookingService.getAllBookings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Bookings are retrieved succesfully',
    data: result,
  });
});

const getSingleBooking = catchAsync(async (req, res) => {
  const tourId = req.params.tourId;
  const result = await bookingService.getSingleBooking(tourId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking is retrieved succesfully',
    data: result,
  });
});

const updateABooking = catchAsync(async (req, res) => {
  const tourId = req.params.tourId;
  const data = req.body;

  const result = await bookingService.updateABooking(tourId, data);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking is updated succesfully',
    data: result,
  });
});

const deleteABooking = catchAsync(async (req, res) => {
  const { bookingId } = req.params;

  const result = await bookingService.deleteABooking(bookingId);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Booking is deleted succesfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateABooking,
  deleteABooking,
};
