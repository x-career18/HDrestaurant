import mongoose from "mongoose";
import { Status } from '../constants.js';

const LocationSchema = new mongoose.Schema({
    code: {
        type: String,
        default: "L_000",
    },
    name: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: Status,
        default: Status.ACTIVE,
    },
}, { timestamps: true });

const LocationModel = mongoose.model('Location', LocationSchema);

export default LocationModel;