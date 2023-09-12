import { PartialType } from '@nestjs/mapped-types';
import { CreateFlightDto } from './create-flight.dto';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateFlightDto extends PartialType(CreateFlightDto) {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly pilot: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly airplane: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly destinationCity: string;
  @ApiProperty()
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  readonly flightDate: Date;
}
