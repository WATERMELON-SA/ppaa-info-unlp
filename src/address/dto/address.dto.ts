import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { Expose } from 'class-transformer';
Expose;

export class AddressDto {
  @ApiProperty({ example: '1st Street', description: 'Street name' })
  @Expose()
  @IsNotEmpty()
  street: string;

  @ApiProperty({ example: '123', description: 'House or building number' })
  @Expose()
  @IsNotEmpty()
  number: number;

  @ApiProperty({ example: '1', description: 'Optional, building floor number' })
  @Expose()
  floor: number;

  @ApiProperty({
    example: 'A',
    description: 'Optional, apartment identifier on the floor',
  })
  @Expose()
  apartment: string;

  @ApiProperty({ example: 'La Plata', description: 'City name' })
  @Expose()
  @IsNotEmpty()
  city: string;

  @ApiProperty({ example: 'Buenos Aires', description: 'Province name' })
  @Expose()
  @IsNotEmpty()
  province: string;

  @ApiProperty({ example: 'Argentina', description: 'Country name' })
  @Expose()
  @IsNotEmpty()
  country: string;
}
