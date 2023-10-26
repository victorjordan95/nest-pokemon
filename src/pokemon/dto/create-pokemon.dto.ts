import {
  IsInt,
  IsNotEmpty,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreatePokemonDto {
  @IsInt()
  @IsPositive()
  @IsNotEmpty()
  @Min(1)
  no: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  name: string;
}
