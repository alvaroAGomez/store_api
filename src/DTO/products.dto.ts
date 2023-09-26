import { PartialType } from "@nestjs/mapped-types";
import { IsNumber, IsString, IsUrl, IsNotEmpty, IsPositive } from "class-validator";

//para validadores se instalo class-validator y class-transformer
export class CreateProductDTO{
    @IsString()
    @IsNotEmpty()
    readonly name :string;
   
    @IsString()
    @IsNotEmpty()
    readonly description :string;
  
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly price :number;
     
    @IsNumber()
    @IsNotEmpty()
    @IsPositive()
    readonly stock :number;
    
    @IsUrl()
    @IsNotEmpty()
    readonly image :string;


}
//npm i @nestjs/mapped-typess-transformer dependencia para poder aplicar partialtype y asi convertir todos los atributos en opcionales, extendiendo de otra clase
export class UpdateProductDTO extends PartialType(CreateProductDTO){}