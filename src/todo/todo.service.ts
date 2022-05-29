import { Injectable } from '@nestjs/common';
import { Prisma, Todo } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TodoService {
  constructor(private prisma: PrismaService) {}

  async todo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prisma.todo.findUnique({ where });
  }

  async todos(params: {
    skip?: number;
    take?: number;
    where?: Prisma.TodoWhereInput;
    orderBy?: Prisma.TodoOrderByWithRelationInput;
  }): Promise<Todo[]> {
    const { skip, take, where, orderBy } = params;
    return this.prisma.todo.findMany({
      skip,
      take,
      where,
      orderBy,
    });
  }

  async createTodo(data: Prisma.TodoCreateInput): Promise<Todo> {
    return this.prisma.todo.create({ data });
  }

  async updateTodo(params: {
    where: Prisma.TodoWhereUniqueInput;
    data: Prisma.TodoUpdateInput;
  }): Promise<Todo> {
    const { where, data } = params;
    return this.prisma.todo.update({
      data,
      where,
    });
  }

  async deleteTodo(where: Prisma.TodoWhereUniqueInput): Promise<Todo> {
    return this.prisma.todo.delete({ where });
  }
}
