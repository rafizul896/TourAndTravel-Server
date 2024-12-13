import { Router } from 'express';
import { tourController } from './tour.controller';
const tourRouter = Router();

tourRouter.post('/createTour', tourController.createTour);
tourRouter.get('/', tourController.getAllTours);
tourRouter.get('/:tourId', tourController.getATours);
tourRouter.put('/:tourId', tourController.updateATour);
tourRouter.delete('/:tourId', tourController.deleteATour);

export default tourRouter;
