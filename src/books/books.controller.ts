import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Books } from './classbook/books';
import { BooksService } from './books.service';
import { NuovoLibroDto } from './dtos/nuovo-libro.dto';
//import { NuovoLibroDto } from './dtos/nuovo-libro.dto';

@Controller('books')
export class BooksController {
constructor(private booksService: BooksService){}
  @Get('lista')
  vedi(){
    return this.booksService.lista();
  }

  @Post('add')
agg(@Body() book: NuovoLibroDto){
  this.booksService.aggiungi(book);
  return 'libro aggiunto con successo'

}
@Post('modifica')
modifi(@Body() body){
  this.booksService.mod(body)
  return 'modifica effettuata'

}
@Get(':id')
trovalib(@Param (':id') id:number){
  return this.booksService.trova(id)

}




/*@Get(':id')
trova(@Param('id')id :number){
  return this.booksService.cerca(id);
}

@Post('add')
agg(@Body() body){
  return this.booksService.aggiungi(body);

}
@Post('modifica')
mod(@Body() Body){
  return this.booksService.modifica(Body)
}*/



  
  
    /*
    @Post('nuovo')
libronuovo(@Body() body){ creo un array con i libri 
    let libri: LIbro=[('')] 

chiamata get per vedere la lista libri
 @Get()
async listalibri(){ 
  return this.libri
 }

@Get()
async 
    let book= new Books (body.titolo, body.autore, body.trama)
    this.libro.push(book)
    return "okay"
  }
  
@Get("book")
invio():Books[]{
  return this.libro
}*/
}
