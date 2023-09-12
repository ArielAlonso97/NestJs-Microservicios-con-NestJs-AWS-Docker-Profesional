import { PartialType } from '@nestjs/mapped-types';
import { CreatePassengerDto } from './create-passenger.dto';
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePassengerDto extends PartialType(CreatePassengerDto) {
  @ApiProperty()
  @IsString()
  readonly name: string;
  @ApiProperty()
  @IsEmail()
  readonly email: string;
}
