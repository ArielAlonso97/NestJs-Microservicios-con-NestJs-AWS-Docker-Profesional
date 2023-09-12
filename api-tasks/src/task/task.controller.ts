import { Body, Controller, Delete, Get, Param, Post, Put, Req, UsePipes, ValidationPipe } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { TaskService } from './task.service';
import { ITask } from './task.interface';

@Controller('api/v1/task')
export class TaskController {

    constructor(private readonly taskService:TaskService){}

    @Post()
    create(@Body() taskDTO: TaskDTO){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>reject('Error en petición'), 15000)
        })
        /* return  this.taskService.create(taskDTO); */
    }

    @Get()
    findAll():ITask[] {
        return this.taskService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.taskService.finOne(id)
    }

    @Put(':id')
    update(@Param('id')  id:string, @Body() taskDTO: TaskDTO){
        return this.taskService.update(id, taskDTO)
    }

    @Delete(':id')
    delete(@Param('id') id: string):string {
        return this.taskService.delete(id)
    }
}
