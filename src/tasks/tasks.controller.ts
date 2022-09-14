import { GetTaskFilterDto } from './../dto/get-task-filter';
import { CreateTaskDto } from './../dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param, Delete, HttpCode, Patch, Query } from '@nestjs/common';
import { Task } from './task.module';
import { UpdateTaskStatusDto } from 'src/dto/update-task-status.dto';

@Controller('tasks')
export class TasksController {
    // Inject the service in our controller
    constructor(private tasksService:TasksService){}

    // http://localhost:3000/tasks
    // Retrieve the tasks that was exposed by the TaskService
    @Get()
    getTasks(@Query() filterDTO: GetTaskFilterDto): Task[]{
        // If any query was provided forr filtering then call getTaskByFilter
        // If filterDTO has a value then run if statement
        if(Object.keys(filterDTO).length){
            // Run function
            return this.tasksService.getTaskWithFilters(filterDTO)
        }else{
            return this.tasksService.getAllTasks()
        }
    }

    // http://localhost:3000/tasks/<someId>
    @Get('/:id')
    getTakById(@Param('id') id: string): Task{
        return this.tasksService.getTakById(id)
    }

    @Post()
    @HttpCode(201)
    createNewTask(
        // The Body will only accept a title and a description parameter
        @Body() CreateTaskDto: CreateTaskDto
    ):Task {
        // Retrieve title and description
        // console.log({title, description})
        return this.tasksService.createNewTask(CreateTaskDto)
    }

    @Delete('/:id')
    deleteTaskById(@Param('id') id: string): void{ // @Param is used to extract to extract the id
        return this.tasksService.deleteTaskById(id)
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status') status: UpdateTaskStatusDto){
        console.log('body: ', status);
        return this.tasksService.updateTaskStatus(id,status)
    }
}
