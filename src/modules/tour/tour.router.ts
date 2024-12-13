import { Router } from 'express';
import { tourController } from './tour.controller';
const tourRouter = Router();

tourRouter.post('/createTour', tourController.createTour);
tourRouter.get('/getAllTour', tourController.getAllTours);
tourRouter.get('/:tourId', tourController.getATours);
tourRouter.put('/updateATour/:tourId', tourController.updateATour);
tourRouter.delete('/deleteATour/:tourId', tourController.deleteATour);

export default tourRouter;
