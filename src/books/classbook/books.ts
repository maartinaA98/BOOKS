import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Books {

    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titolo :string;
    
    @Column()
    autore : string;

    @Column()
    trama : string;
    
    @Column()
    genere: string;
}

 
