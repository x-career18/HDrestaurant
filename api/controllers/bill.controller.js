import BillModel from '../models/bill.model.js';

// createBill
const createBill = async (req, res) => {
    try {
        const { idBooking, idEmployee, idRestaurant, totalAmount, discount, paymentMethod } = req.body;

        const newBill = new BillModel({
            idBooking,
            idEmployee,
            idRestaurant,
            totalAmount,
            discount,
            paymentMethod,
        });

        const savedBill = await newBill.save();
        res.status(201).json(savedBill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// updateBill ID
const updateBill = async (req, res) => {
    try {
        const billId = req.params.id;
        const { idBooking, idEmployee, idRestaurant, totalAmount, discount, paymentMethod, paymentStatus } = req.body;

        const updatedBill = await BillModel.findByIdAndUpdate(
            billId,
            { idBooking, idEmployee, idRestaurant, totalAmount, discount, paymentMethod, paymentStatus },
            { new: true }
        );
        res.json(updatedBill);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// deleteBill ID
const deleteBill = async (req, res) => {
    try {
        const billId = req.params.id;

        await BillModel.findByIdAndDelete(billId);
        res.json({ message: 'The invoice has been successfully deleted.' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const BillController = {
    createBill,
    updateBill,
    deleteBill,
};

export default BillController;
