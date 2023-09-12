import { CreateFlightDto } from './create-flight.dto';
declare const UpdateFlightDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFlightDto>>;
export declare class UpdateFlightDto extends UpdateFlightDto_base {
    readonly pilot: string;
    readonly airplane: string;
    readonly destinationCity: string;
    readonly flightDate: Date;
}
export {};
