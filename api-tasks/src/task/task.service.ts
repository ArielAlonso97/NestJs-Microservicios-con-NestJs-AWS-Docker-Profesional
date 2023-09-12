import { Injectable } from '@nestjs/common';
import { TaskDTO } from './dto/task.dto';
import { ITask } from './task.interface';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TaskService {
  tasks: ITask[] = [];
  create(taskDTO: TaskDTO): ITask {
    const task = {
      id: uuidv4(),
      ...taskDTO,
    };
    this.tasks.push(task);
    return task;
  }

  findAll(): ITask[] {
    return this.tasks;
  }

  finOne(id: string): ITask {
    return this.tasks.find((t) => t.id === id);
  }

  update(id: string, taskDTO: TaskDTO): ITask {
    const updatedTask = {
      id: id,
      ...taskDTO,
    };

    const indice = this.tasks.findIndex((elemento) => {
      if (elemento.id === id) {
        return true;
      }
    });

    this.tasks[indice] = updatedTask;

    return updatedTask;
  }

  delete(id:string):string{
    
    /* const deletedTask = this.tasks.find((t) => t.id === id); */

    const indice = this.tasks.findIndex((elemento) => {
        if (elemento.id === id) {
          return true;
        }
      });
  
      this.tasks.splice(indice,1) 
    return 'tarea borrada'
  }
}
