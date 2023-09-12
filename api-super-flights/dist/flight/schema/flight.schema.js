"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlightSchema = void 0;
const mongoose = require("mongoose");
exports.FlightSchema = new mongoose.Schema({
    pilot: { type: String, required: true },
    airplane: { type: String, required: true },
    destinationCity: { type: String, required: true },
    flightDate: { type: Date, required: true },
    passengers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'passengers' }],
}, { timestamps: true });
exports.FlightSchema.index({ pilot: 1 }, { unique: true });
exports.FlightSchema.index({ airplane: 1 }, { unique: true });
//# sourceMappingURL=flight.schema.js.map