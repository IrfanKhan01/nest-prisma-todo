import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Todo as TodoModel } from '@prisma/client';
import { AppService } from './app.service';
import { TodoService } from './todo/todo.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly todoService: TodoService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('todos/:id')
  async getTodoById(@Param('id') id: string): Promise<TodoModel> {
    return this.todoService.todo({ id: Number(id) });
  }

  @Get('todos')
  async getTodos(): Promise<TodoModel[]> {
    return this.todoService.todos({});
  }

  @Post('todo')
  async createTodo(
    @Body('data') data: { task: string; isCompleted: boolean },
  ): Promise<TodoModel> {
    const { task, isCompleted } = data;
    return this.todoService.createTodo({
      task,
      isCompleted,
    });
  }

  @Put('todos/:id')
  async updateTodo(
    @Param('id') id: string,
    @Body('data') data: { task: string },
  ): Promise<TodoModel> {
    const { task } = data;
    return this.todoService.updateTodo({
      where: { id: Number(id) },
      data: { task },
    });
  }

  @Delete('todos/:id')
  async deleteTodo(@Param('id') id: string): Promise<TodoModel> {
    return this.todoService.deleteTodo({ id: Number(id) });
  }
}
