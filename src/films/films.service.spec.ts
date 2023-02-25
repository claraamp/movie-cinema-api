import { Test, TestingModule } from '@nestjs/testing';
import { Film } from './entities/film.entity';
import { FilmsService } from './films.service';

describe('FilmsService', () => {
  let service: FilmsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FilmsService],
    }).compile();

    service = module.get<FilmsService>(FilmsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

});

describe('FilmsService.__findOne', ()=> {
  it('should return selected film', async ()=>{
    const id = 'eb7854d9-f2cf-45c8-8531-068ec0a354de';
    const mockResponse = {
      id: 'eb7854d9-f2cf-45c8-8531-068ec0a354de',
      name: 'Cocaine Bear',
      director: 'Elizabeth Banks',
      rating: '10',
      yearlaunched: '2023'
    }
    Film.findOne = jest.fn().mockResolvedValue(mockResponse);

    const result = await FilmsService.findOne(id)

    expect (result).toEqual(mockResponse);
    expect(FilmsService.findOne).toHaveBeenCalledTimes(1);
    expect(FilmsService.findOne).toBeCalledWith({
      where: {
          id: id
      }
  })
})
})