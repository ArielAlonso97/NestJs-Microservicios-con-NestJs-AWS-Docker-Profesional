import * as mongoose from 'mongoose';
export declare const PassengerSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name: string;
    email: string;
}, mongoose.Document<unknown, {}, {
    name: string;
    email: string;
}> & {
    name: string;
    email: string;
} & {
    _id: mongoose.Types.ObjectId;
}>;
