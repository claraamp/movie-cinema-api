import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateFilmDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    director: string;

    @IsOptional()
    @IsInt()
    @ApiPropertyOptional()
    rating: number;

    
    @IsInt()
    @IsNotEmpty()
    @ApiProperty()
    yearlaunched: number;

   
}
