import mongoose from 'mongoose';
import { Status } from '../constants.js';
import { PAYMENT_METHOD } from '../constants.js';

const BillSchema = new mongoose.Schema({
    idBooking: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Booking',
        required: true,
    },
    idEmployee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    idRestaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
    totalAmount: {
        type: Number,
        required: true,
    },
    discount: {
        type: Number,
        default: 0,
    },
    paymentMethod: {
        type: String,
        required: true,
        enum: Object.values(PAYMENT_METHOD),
    },
    paymentStatus: {
        type: String,
        enum: Status,
        default: Status.PENDING,
    },
}, { timestamps: true });

const BillModel = mongoose.model('Bill', BillSchema);

export default BillModel;