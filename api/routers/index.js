import express from 'express';
import authRouter from './auth.router.js';
import restaurantRouter from './restaurant.router.js';
import menuRouter from './menu.router.js';
import bookingRouter from './booking.router.js';
import locationRouter from './location.router.js';

const router = express.Router();

router.use('/auth', authRouter);

router.use('/restaurants', restaurantRouter);

router.use('/menus', menuRouter);

router.use('/bookings', bookingRouter);

router.use('/locations', locationRouter);

export default router;