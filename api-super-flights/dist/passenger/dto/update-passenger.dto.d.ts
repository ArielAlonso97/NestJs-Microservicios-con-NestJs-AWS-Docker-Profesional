import { CreatePassengerDto } from './create-passenger.dto';
declare const UpdatePassengerDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreatePassengerDto>>;
export declare class UpdatePassengerDto extends UpdatePassengerDto_base {
    readonly name: string;
    readonly email: string;
}
export {};
