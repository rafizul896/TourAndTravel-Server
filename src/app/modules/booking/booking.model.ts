import { model, Schema, Types } from 'mongoose';
import { IBooking } from './booking.interface';

const bookingSchema = new Schema<IBooking>(
  {
    user: {
      type: Types.ObjectId,
      required: true,
      ref: 'User',
    },
    tour: {
      type: Types.ObjectId,
      required: true,
      ref: 'Tour',
    },
    bookedSlots: {
      type: Number,
      required: true,
    },
    bookingStatus: {
      type: String,
      enum: ['pending', 'paid', 'cancelled'],
      default: 'pending',
    },
    totalPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export const Booking = model<IBooking>('Booking', bookingSchema);
