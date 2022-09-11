import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';
import { Task } from './task.module';

@Controller('tasks')
export class TasksController {
    // Inject the service in our controller
    constructor(private tasksService:TasksService){}

    // Retrieve the tasks that was exposed by the TaskService
    @Get()
    getAllTasks(): Task[]{
        return this.tasksService.getAllTasks()
    }

}
