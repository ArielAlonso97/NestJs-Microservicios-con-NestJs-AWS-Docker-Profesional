import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IUser } from 'src/common/interfaces/user.interface';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { USER } from 'src/common/models/models';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(USER.name) private readonly model: Model<IUser>) {}

  async findByUsername(username: string) {
    return await this.model.findOne({ username });
  }

  async checkPassword(password: string,passwordDB:string): Promise<boolean> {
    return await bcrypt.compare(password,passwordDB);
  }

  async hashPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const hash = await this.hashPassword(createUserDto.password);
    const newUser = new this.model({ ...createUserDto, password: hash });
    return await newUser.save();
  }

  async findAll() {
    return await this.model.find();
  }

  async findOne(id: string) {
    return await this.model.findById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const hash = await this.hashPassword(updateUserDto.password);
    const user = { ...updateUserDto, password: hash };
    return await this.model.findByIdAndUpdate(id, user, { new: true });
  }

  async remove(id: string) {
    return await this.model.findByIdAndDelete(id);
  }
}
