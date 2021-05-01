import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { TodoService } from '../todo/todo.service';
import { TestDto } from './dtos/test.dto';

@Controller('test2')
export class Test2Controller {
  constructor(private todoService: TodoService) {
  }

  @Post()
  testValdiator(
    @Body() data: TestDto
  ) {
    return data;
  }
}
