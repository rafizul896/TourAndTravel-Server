import express, { Request, Response } from 'express';
import cors from 'cors';
import userRouter from './app/modules/user/user.router';
import tourRouter from './app/modules/tour/tour.router';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import { bookingRouter } from './app/modules/booking/booking.route';
const app = express();

// middleware
app.use(express.json());
app.use(cors());

app.use('/api/users', userRouter);
app.use('/api/tours', tourRouter);
app.use('/api/booking', bookingRouter);

app.get('/', (req: Request, res: Response) => {
  res.send({
    status: true,
    message: 'Tour and travel server is Live 🏃‍♂️‍➡️',
  });
});

app.use(globalErrorHandler);

export default app;
