import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body } from '@nestjs/common';
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

    @Post()
    createNewTask(
        // The Body will only accept a title and a description parameter
        @Body('title') title:string,
        @Body('description') description:string,
    ):Task {
        // Retrieve title and description
        // console.log({title, description})
        return this.tasksService.createNewTask(title, description)
    }
}
