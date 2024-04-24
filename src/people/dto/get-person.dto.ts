import { ApiProperty } from '@nestjs/swagger';

export class GetPersonDto {
  @ApiProperty({ example: 1, description: 'Unique identifier for the person' })
  id: number;

  @ApiProperty({
    example: 'Doe John',
    description: 'Concatenated last and first name of the person',
  })
  fullName: string;

  @ApiProperty({
    example: 32,
    description: 'Calculated age of the person from their birthday',
  })
  age: number;
}
