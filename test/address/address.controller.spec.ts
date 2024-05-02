import { Test, TestingModule } from '@nestjs/testing';
import { AddressController } from 'src/address/address.controller';
import { AddressService } from 'src/address/services/address.service';
import { AddressDto } from 'src/address/dto/address.dto';

describe('AddressController', () => {
  let controller: AddressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AddressController],
      providers: [AddressService],
    }).compile();

    controller = module.get<AddressController>(AddressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return some data', () => {
      expect(controller.findAll()).toBe(
        'This action returns all the addresses',
      );
    });
  });

  describe('create', () => {
    const mockAddress: AddressDto = {
      street: '1st Street',
      number: 123,
      floor: 1,
      apartment: 'A',
      city: 'La Plata',
      province: 'Buenos Aires',
      country: 'Argentina',
    };
    it('should create a new address', () => {
      expect(controller.create(mockAddress)).toBe(
        'This action adds a new address',
      );
    });
  });
});
