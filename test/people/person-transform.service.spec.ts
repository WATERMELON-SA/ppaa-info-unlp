import { Test, TestingModule } from '@nestjs/testing';
import { PeopleTransformService } from 'src/people/services/people-transform.service';

describe('PeopleTransformService', () => {
  let service: PeopleTransformService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PeopleTransformService],
    }).compile();

    service = module.get<PeopleTransformService>(PeopleTransformService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
