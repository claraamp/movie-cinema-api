import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsService } from './films.service';
import { FilmsController } from './films.controller';
import { FilmsRepository } from './films.repository';

@Module({
  imports:[TypeOrmModule.forFeature([FilmsRepository])],
  controllers: [FilmsController],
  providers: [FilmsService]
})
export class FilmsModule {}
