/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { FlightService } from './flight.service';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { PassengerService } from 'src/passenger/passenger.service';
export declare class FlightController {
    private readonly flightService;
    private readonly passengerService;
    constructor(flightService: FlightService, passengerService: PassengerService);
    create(createFlightDto: CreateFlightDto): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/flight.interface").IFlight> & import("../common/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): Promise<Omit<import("mongoose").Document<unknown, {}, import("../common/interfaces/flight.interface").IFlight> & import("../common/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }, never>[]>;
    findOne(id: string): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/flight.interface").IFlight> & import("../common/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    update(id: string, updateFlightDto: UpdateFlightDto): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/flight.interface").IFlight> & import("../common/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    remove(id: string): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/flight.interface").IFlight> & import("../common/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    addPassenger(flightId: string, passengerId: string): Promise<import("mongoose").Document<unknown, {}, import("../common/interfaces/flight.interface").IFlight> & import("../common/interfaces/flight.interface").IFlight & {
        _id: import("mongoose").Types.ObjectId;
    }>;
}
