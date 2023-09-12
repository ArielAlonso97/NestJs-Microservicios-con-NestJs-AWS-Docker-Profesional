import { Injectable } from '@nestjs/common';
import { CreatePassengerDto } from './dto/create-passenger.dto';
import { UpdatePassengerDto } from './dto/update-passenger.dto';
import { InjectModel } from '@nestjs/mongoose';
import { PASSENGER } from 'src/common/models/models';
import { Model } from 'mongoose';
import { IPassenger } from 'src/common/interfaces/passenger.interface';

@Injectable()
export class PassengerService {
  constructor(
    @InjectModel(PASSENGER.name) private readonly model: Model<IPassenger>,
  ) {}

  async create(createPassengerDto: CreatePassengerDto) {
    const newPassenger = new this.model(createPassengerDto);
    return await newPassenger.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updatePassengerDto: UpdatePassengerDto) {
    return await this.model.findByIdAndUpdate(id, updatePassengerDto, {
      new: true,
    });
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
