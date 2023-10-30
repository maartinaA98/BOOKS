import { IsNotEmpty, IsString } from "class-validator";

export class NuovoLibroDto{
  
  @IsString()
  @IsNotEmpty()
  titolo: string;

  @IsString()
  @IsNotEmpty()
  trama: string;

  @IsString()
  @IsNotEmpty()
  autore: string;

  @IsString()
@IsNotEmpty()
genere: string;
}