import { Module } from '@nestjs/common';
import { AddressService } from 'src/address/services/address.service';
import { AddressController } from 'src/address/address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from 'src/address/entities/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
