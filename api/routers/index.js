import express from 'express';
import authRouter from './auth.router.js';
import restaurantRouter from './restaurant.router.js';

const router = express.Router();

router.use('/auth', authRouter);

router.use('/restaurants', restaurantRouter);
export default router;