import { Body, Injectable, NotFoundException } from '@nestjs/common';
import { Books } from './classbook/books';
import { NotFoundError } from 'rxjs';
import { NuovoLibroDto } from './dtos/nuovo-libro.dto';
import { ModificaLibroDto } from './dtos/modifica-libro.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
//import { BooksRepository } from './books.repository';
@Injectable()
export class BooksService {

  constructor( @InjectRepository(Books)
   private bookRepository : Repository<Books>){}

async lista(): Promise <Books[]>{
    return this.bookRepository.find()
  }

async aggiungi(book: NuovoLibroDto){
 return this.bookRepository.insert(book);
}

async mod(lib :ModificaLibroDto){
   
  return this.bookRepository.update(lib.id, lib )
}

async trova(id:number):Promise <Books>{
  return this.bookRepository.findOneBy({id})
}

}

/*lista(){
    return this.libri
}

cerca(id: number){
    for(let a of this.libri){
        if(a.id == id){
            return a 

        }
    }
    throw new NotFoundException({code:404, message:"nussun id trovato"})
}

aggiungi(body: NuovoLibroDto ){
let nuovo_book= new Books(body.titolo, body.autore, body.trama)
this.libri.push(nuovo_book);
return "libro aggiunto correttamente"
}
modifica(body: ModificaLibroDto) {
    let modifica = false;
    for(let i=0; i<this.libri.length; i++) {
      if(this.libri[i].id == body.id) {
        modifica = true;
        let nuovo_book = new Books( body.titolo, body.autore, body.trama);
        this.libri[i] = nuovo_book;
        break;
      }
    }
    
    if(modifica) {
      return "Libro modificato";
    }
    else {
      return "Nessun libro trovato con l'ID specificato";
    }
  }
}
}
ypeof BooksService, propertyKey: undefined, parameterIndex: 0) => void {
*/


