import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Person {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'John', description: "Person's first name" })
  @Column()
  firstName: string;
  
  @ApiProperty({ example: 'Doe', description: "Person's last name" })
  @Column()
  lastName: string;

  @ApiProperty({ format: 'date', example: '2022-12-15', description: "Person's birthday formatted in date-only ISO8601" })
  @Column()
  birthday: string;
}
