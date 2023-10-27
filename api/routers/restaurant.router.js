import express from 'express';
import RestaurantController from '../controllers/restaurant.controller.js';
import { checkRestaurantExistence } from '../middlewares/restaurant.middleware.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const router = express.Router();

// Lấy thông tin tất cả nhà hàng
router.get('/',checkRestaurantExistence, authMiddleware, RestaurantController.getRestaurant);

// Tạo mới nhà hàng
router.post('/', authMiddleware, RestaurantController.createRestaurant);

// Lấy thông tin nhà hàng theo id
router.get('/:id', checkRestaurantExistence, authMiddleware, RestaurantController.getRestaurantById);

// Cập nhật nhà hàng
router.put('/:id', checkRestaurantExistence, authMiddleware, RestaurantController.updateRestaurant);

//Xóa nhà hàng
router.delete('/:id', checkRestaurantExistence, authMiddleware, RestaurantController.deleteRestaurant);

export default router;