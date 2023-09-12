import * as mongoose from 'mongoose';
export declare const FlightSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    passengers: mongoose.Types.ObjectId[];
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    passengers: mongoose.Types.ObjectId[];
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
}> & {
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    passengers: mongoose.Types.ObjectId[];
    pilot: string;
    airplane: string;
    destinationCity: string;
    flightDate: Date;
} & {
    _id: mongoose.Types.ObjectId;
}>;
