import RestaurantModel from '../models/restaurant.model.js';
import UserModel from '../models/user.model.js';
import { ROLE_LIST } from '../constant.js';
import { v4 as uuidv4 } from 'uuid';

const getRestaurant = async (req, res) => {
    try {
        const restaurant = await RestaurantModel.find();
        res.json(restaurant);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const createRestaurant = async (req, res) => {
    const { name, address, image, openingHours, closingHours, description } = req.body;
    //1.Validation
    if (!name || !address || !image || !openingHours || !closingHours || !description) {
        return res.status(400).json({ message: 'Vui lòng nhập đầy đủ thông tin.' });
    }

    try {
        //2. Check user exist
        const existingRestaurant = await RestaurantModel.findOne({ name });
        if (existingRestaurant) {
            return res.status(400).json({ message: 'Nhà hàng đã tồn tại.' });
        }

        //3. Create new user
        const userId = req.user.id;
        const user = await UserModel.findById(userId);
        if (user.role !== ROLE_LIST.ADMIN && user.role !== ROLE_LIST.MANAGER) {
            return res.status(403).json({ message: 'Bạn không có quyền tạo nhà hàng.' });
        }
        const idManager = userId;
        const idRestaurant = uuidv4();

        const newRestaurant = new RestaurantModel({
            name,
            address,
            image,
            openingHours,
            closingHours,
            description,
            isVerified: false,
            idRestaurant,
            idManager,
        });

        const savedRestaurant = await newRestaurant.save();
        res.status(201).json(savedRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateRestaurant = async (req, res) => {
    const { id } = req.params;

    try {
        const restaurant = await RestaurantModel.findById(id);

        // Kiểm tra xem có quyền sửa nhà hàng hay không
        if (restaurant.idManager !== req.user.id || !restaurant.isVerified) {
            return res.status(403).json({ message: 'Bạn không có quyền sửa nhà hàng này.' });
        }

        const updatedRestaurant = await RestaurantModel.findByIdAndUpdate(id, req.body, { new: true });
        res.json(updatedRestaurant);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteRestaurant = async (req, res) => {
    const { id } = req.params;
    try {
        const restaurant = await RestaurantModel.findById(id);

        // Kiểm tra xem có quyền xóa nhà hàng hay không
        if (restaurant.idManager !== req.user.id || !restaurant.isVerified) {
            return res.status(403).json({ message: 'Bạn không có quyền xóa nhà hàng này.' });
        }

        await RestaurantModel.findByIdAndDelete(id);
        res.json({ message: 'Deleted successfully.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const RestaurantController = {
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
};

export default RestaurantController;