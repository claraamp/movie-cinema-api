import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateFilmDto {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsOptional()
    @IsInt()
    rating: number;

   
}
