import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonResolver } from './lesson.resolver';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { UserModule } from 'src/users/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Lesson]),
    UserModule,
  ],
  providers: [
    LessonResolver,
    LessonService
  ]
})
export class LessonModule {}
