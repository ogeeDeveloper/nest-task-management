import { TaskStatus } from "src/tasks/task.module";

export class GetTaskFilterDto {
    status?: TaskStatus
    search?: string
}