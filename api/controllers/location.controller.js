import LocationModel from '../models/location.model.js';

// Tạo một địa điểm mới
const createLocation = async (req, res) => {
    try {
        const { code, name } = req.body;

        // Sử dụng giá trị "code" và "name" từ yêu cầu để tạo địa điểm mới
        const newLocation = new LocationModel({ code, name });

        // Lưu địa điểm mới vào cơ sở dữ liệu
        const savedLocation = await newLocation.save();

        res.status(201).json(savedLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lấy danh sách tất cả các địa điểm
const getLocations = async (req, res) => {
    try {
        const locations = await LocationModel.find();
        res.json(locations);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Lấy thông tin một địa điểm dựa trên ID
const getLocationById = async (req, res) => {
    try {
        const location = await LocationModel.findById(req.params.id);

        if (!location) {
            return res.status(404).json({ message: 'Không tìm thấy địa điểm.' });
        }

        res.json(location);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Cập nhật thông tin một địa điểm dựa trên ID
const updateLocation = async (req, res) => {
    try {
        const { name } = req.body;

        const updatedLocation = await LocationModel.findByIdAndUpdate(
            req.params.id,
            { name },
            { new: true }
        );

        res.json(updatedLocation);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Xóa một địa điểm dựa trên ID
const deleteLocation = async (req, res) => {
    try {
        const deletedLocation = await LocationModel.findByIdAndDelete(req.params.id);

        if (!deletedLocation) {
            return res.status(404).json({ message: 'Không tìm thấy địa điểm để xóa.' });
        }

        res.json({ message: 'Địa điểm đã bị xóa thành công.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const LocationController = {
    createLocation,
    getLocations,
    getLocationById,
    updateLocation,
    deleteLocation,
};

export default LocationController;
