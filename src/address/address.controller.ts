import { Controller, Get, Post, Body } from '@nestjs/common';
import { AddressService } from 'src/address/services/address.service';
import { ApiTags } from '@nestjs/swagger';
import { AddressDto } from 'src/address/dto/address.dto';

@ApiTags('Address')
@Controller('address')
export class AddressController {
  constructor(private readonly addressService: AddressService) {}

  @Post()
  create(@Body() createPersonDto: AddressDto) {
    return this.addressService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.addressService.findAll();
  }
}
