import { CreateTaskDto } from './../dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Task } from './task.module';

@Controller('tasks')
export class TasksController {
    // Inject the service in our controller
    constructor(private tasksService:TasksService){}

    // http://localhost:3000/
    // Retrieve the tasks that was exposed by the TaskService
    @Get()
    getAllTasks(): Task[]{
        return this.tasksService.getAllTasks()
    }

    // http://localhost:3000/<someId>
    @Get('/:id')
    getTakById(@Param('id') id: string): Task{
        return this.tasksService.getTakById(id)
    }

    @Post()
    createNewTask(
        // The Body will only accept a title and a description parameter
        @Body() CreateTaskDto: CreateTaskDto
    ):Task {
        // Retrieve title and description
        // console.log({title, description})
        return this.tasksService.createNewTask(CreateTaskDto)
    }
}
