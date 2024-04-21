import { Test, TestingModule } from '@nestjs/testing';
import { PeopleController } from '../../src/people/people.controller';
import { PeopleService } from '../../src/people/people.service';
import { CreatePersonDto } from 'src/people/dto/create-person.dto';

describe('PeopleController', () => {
  let controller: PeopleController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PeopleController],
      providers: [PeopleService],
    }).compile();

    controller = module.get<PeopleController>(PeopleController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return some data', () => {
      expect(controller.findAll()).toBe('This action returns all the people');
    });
  });

  describe('create', () => {
    const mockUser: CreatePersonDto = {
      firstName: 'Jane',
      lastName: 'Doe',
      birthday: '1997-06-04',
    };
    it('should create a new person', () => {
      expect(controller.create(mockUser)).toBe('This action adds a new person');
    });
  });
});
