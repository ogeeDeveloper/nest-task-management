import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  // Define properties

  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}
