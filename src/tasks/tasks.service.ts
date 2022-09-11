import { Injectable } from '@nestjs/common';
import { Task } from './task.module';

@Injectable()
export class TasksService {
   private tasks: Task[] = []

//    Function to return all tasks
    getAllTasks(): Task[]{
        return this.tasks
    }
}
