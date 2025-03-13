import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ITask } from './tasks.model';
import { CreateTaskDto } from './create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  findAll(): ITask[] {
    return this.tasksService.findAll();
  }

  @Get('/:id')
  public findOne(@Param('id') id: string): ITask {
    const task = this.tasksService.findOne(id);

    if (task) {
      return task;
    }

    throw new NotFoundException(`Task with ID ${id} not found`);
  }

  @Post()
  public create(@Body() createTaskDto: CreateTaskDto) {
    return this.tasksService.create(createTaskDto);
  }
}
