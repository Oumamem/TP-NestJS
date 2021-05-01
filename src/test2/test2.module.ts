import { Get, Module } from '@nestjs/common';
import { Test2Controller } from './test2.controller';
import { TodoModule } from '../todo/todo.module';

@Module({
  controllers: [Test2Controller],
  imports: [TodoModule]
})
export class Test2Module {}
