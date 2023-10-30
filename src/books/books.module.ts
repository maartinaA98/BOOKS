import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Books } from './classbook/books';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([Books])],
    controllers:[BooksController], 
    providers:[BooksService]}
    )
export class BooksModule {

}
