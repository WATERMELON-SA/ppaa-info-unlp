import { ApiProperty } from '@nestjs/swagger';


export class Person {
  @ApiProperty({ example: 'John', description: "Person's first name" })
  firstName: string;
  
  @ApiProperty({ example: 'Doe', description: "Person's last name" })
  lastName: string;

  @ApiProperty({ format: 'date', example: '2022-12-15', description: "Person's birthday formatted in date-only ISO8601" })
  birthday: string;
}
