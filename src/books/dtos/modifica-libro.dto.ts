import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class ModificaLibroDto{
  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  id: number;

  @IsString()
  @IsNotEmpty()
  titolo: string;

  @IsString()
  @IsNotEmpty()
  trama: string;

  @IsString()
  @IsNotEmpty()
  autore: string;
}