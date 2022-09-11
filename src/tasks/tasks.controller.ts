import { TasksService } from './tasks.service';
import { Controller } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    // Inject the service in our controller
    constructor(private tasksService:TasksService){}
}
