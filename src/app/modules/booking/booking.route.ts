import { Router } from 'express';
import { bookingController } from './booking.controller';

const router = Router();

router.post('/createBooking', bookingController.createBooking);
router.get('/', bookingController.getAllBookings);

export const bookingRouter = router;
