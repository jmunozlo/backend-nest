import { IsNotEmpty, IsNumber, MaxLength, MinLength } from 'class-validator';
export class CreateUserDto {
  @MinLength(4)
  @MaxLength(10)
  rut: string;

  @IsNotEmpty()
  name: string;

  @IsNumber()
  age: number;
}
