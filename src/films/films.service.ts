import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmsService {
  constructor(@InjectRepository(Film) private readonly repository: Repository<Film>) {}

  create(createFilmDto: CreateFilmDto) {
    const film = this.repository.create(createFilmDto);
    return this.repository.save(film);
  }

  findAll(): Promise <Film[]> {
    return this.repository.find();
  }

  findOne(id: string): Promise <Film> {
    return this.repository.findOne({
      where: {
        id: id
      }
    });
  }

  async update(id: string, updateFilmDto: UpdateFilmDto): Promise<Film> {
    const film = await this.repository.preload({
      id: id,
      ...updateFilmDto,
    });
    if (!film) {
      throw new NotFoundException(`Item ${id} not found`);
    }
    return this.repository.save(film);
  }
 
  async remove(id: string) {
    const film = await this.findOne(id);
    return this.repository.remove(film);
  }
 }
