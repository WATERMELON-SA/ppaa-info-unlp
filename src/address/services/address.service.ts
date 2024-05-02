import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from 'src/address/entities/address.entity';
import { AddressDto } from 'src/address/dto/address.dto';
import { plainToClass } from 'class-transformer';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>,
  ) {}

  async create(addressDto: AddressDto): Promise<AddressDto> {
    const newAddress = this.addressRepository.create(addressDto);
    await this.addressRepository.save(newAddress);
    return plainToClass(AddressDto, newAddress, {
      excludeExtraneousValues: true,
    });
  }

  async findAll(): Promise<AddressDto[]> {
    const addresses = await this.addressRepository.find();
    return addresses.map((address) =>
      plainToClass(AddressDto, address, { excludeExtraneousValues: true }),
    );
  }
}
