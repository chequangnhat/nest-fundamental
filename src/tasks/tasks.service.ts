import { Injectable } from '@nestjs/common';
import { ITask } from './tasks.model';
import { CreateTaskDto } from './create-task.dto';
import { randomUUID } from 'crypto';
import { TaskStatus } from './tasks.model';

@Injectable()
export class TasksService {
  private tasks: ITask[] = [
    {
      id: 'db530ced-8c29-463f-838a-19f9d69a9b6f',
      title: 'Learn Nest js',
      description: 'Description 1',
      status: TaskStatus.OPEN,
    },
  ];

  findAll(): ITask[] {
    return this.tasks;
  }

  findOne(id: string): ITask | undefined {
    return this.tasks.find((task) => task.id === id);
  }

  create(createTaskDto: CreateTaskDto): ITask {
    const task: ITask = {
      id: randomUUID(),
      ...createTaskDto,
    };

    this.tasks.push(task);
    return task;
  }

  delete(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
