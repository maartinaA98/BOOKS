import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksController } from './books/books.controller';
import { BooksService } from './books/books.service';
//import { BooksRepository } from './books/books.repository';
import { Books } from './books/classbook/books';
import { TypeOrmModule } from '@nestjs/typeorm'
import { BooksModule } from './books/books.module';

@Module({
  imports: [BooksModule, 
    TypeOrmModule.forRoot({
    type: 'mysql',
    host:'localhost',
    port: 3306,
    username: 'root',
    password: 'rootroot',
    database: 'libri',
    entities: [Books],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
