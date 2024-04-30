import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsEmail, IsNotEmpty, MaxDate, MinDate } from 'class-validator';
import { maxBirthday, minBirthday } from 'src/people/birthday-utils';

export class CreatePersonDto {
  @ApiProperty({ example: 'John', description: "Person's first name" })
  @IsNotEmpty()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: "Person's last name" })
  @IsNotEmpty()
  lastName: string;

  @ApiProperty({
    format: 'date',
    example: '2003-04-01',
    description: "Person's birthday formatted in date-only ISO8601",
  })

  @Type(() => Date)
  @MaxDate(maxBirthday) // Validates age to be at least 18 years old
  @MinDate(minBirthday) // Validates age not to exceed 125 years
  birthday: string;

  @ApiProperty({
    example: 'john.doe@example.com',
    description: "Person's unique email address",
  })

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
