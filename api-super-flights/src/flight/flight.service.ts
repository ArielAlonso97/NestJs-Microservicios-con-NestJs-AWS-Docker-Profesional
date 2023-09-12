import { Injectable } from '@nestjs/common';
import { CreateFlightDto } from './dto/create-flight.dto';
import { UpdateFlightDto } from './dto/update-flight.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FLIGHT } from 'src/common/models/models';
import { IFlight } from 'src/common/interfaces/flight.interface';
import { Model } from 'mongoose';

@Injectable()
export class FlightService {
  constructor(
    @InjectModel(FLIGHT.name) private readonly model: Model<IFlight>,
  ) {}

  async create(createFlightDto: CreateFlightDto) {
    const newFlight = new this.model(createFlightDto);

    return await newFlight.save();
  }

  async findAll() {
    return await this.model.find().populate('passengers');;
  }

  async findOne(id: string) {
    return await this.model.findById(id).populate('passengers');;
  }

  async update(id: string, updateFlightDto: UpdateFlightDto) {
    return await this.model.findByIdAndUpdate(id, updateFlightDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }

  async addPassenger(flightId: string, passengerId: string) {
    return await this.model.findByIdAndUpdate(
      flightId,
      {
        $addToSet: { passengers: passengerId },
      },
      { new: true },
    ).populate('passengers');
  }
}
