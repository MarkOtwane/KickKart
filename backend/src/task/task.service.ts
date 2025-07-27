/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}
  create(createTaskDto: CreateTaskDto) {
    return this.prisma.task.create({
      data: { task: createTaskDto.task, priority: createTaskDto.priority },
    });
  }

  findAll() {
    return this.prisma.findMany();
  }

  findOne(id: string) {
    return this.prisma.findUnique(id);
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    return await this.prisma.tasks.update({
      where: { id },
      data: updateTaskDto,
    });
  }
  remove(id: number) {
    return `This action removes a #${id} task`;
  }
}
