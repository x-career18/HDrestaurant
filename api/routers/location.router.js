import express from 'express';
import LocationController from '../controllers/location.controller.js';

const router = express.Router();

// Lấy thông tin tất cả địa điểm
router.get('/', LocationController.getLocations);

// Tạo mới địa điểm
router.post('/', LocationController.createLocation);

// Lấy thông tin địa điểm theo id
router.get('/:id', LocationController.getLocationById);

// Cập nhật địa điểm
router.put('/:id', LocationController.updateLocation);

//Xóa địa điểm
router.delete('/:id', LocationController.deleteLocation);

export default router;