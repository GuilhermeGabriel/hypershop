import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { UserModule } from './users/user.module';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Lesson } from './lesson/lesson.entity';
import { User } from './users/user.entity';
import { Product } from './product/product.entity';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb://localhost/hyperstore',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson,
        User,
        Product
      ],
    }),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: true,
      cors: {
        origin: true,
        credentials: true,
      },
    }),
    LessonModule,
    UserModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
