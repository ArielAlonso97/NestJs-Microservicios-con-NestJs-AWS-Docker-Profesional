import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable } from 'rxjs';
import { IUser } from 'src/common/interfaces/user.interface';
import { ClientProxySuperFlights } from 'src/common/proxy/client-proxy';
import { UserMSG } from 'src/common/constants';

@Controller('user')
export class UserController {
  constructor(private readonly clientProxy: ClientProxySuperFlights) {}
  private _clientProxyUser = this.clientProxy.clientProxyUsers;

  @Post()
  create(@Body() createUserDto: CreateUserDto): Observable<IUser> {
    return this._clientProxyUser.send(UserMSG.CREATE, createUserDto);
  }

  @Get()
  findAll() {
    return this._clientProxyUser.send(UserMSG.FIND_ALL, '');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this._clientProxyUser.send(UserMSG.FIND_ONE, id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this._clientProxyUser.send(UserMSG.UPDATE, {id, updateUserDto});
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this._clientProxyUser.send(UserMSG.DELETE, '');
  }
}
